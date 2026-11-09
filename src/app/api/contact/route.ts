import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";
import { checkRateLimit } from "@/lib/rate-limit";
import { getDb, isDatabaseConfigured } from "@/db";
import { contactMessages } from "@/db/schema";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    // 1. IP identification & Rate Limiting
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "127.0.0.1";

    const rateLimit = checkRateLimit(ip, { limit: 5, windowMs: 15 * 60 * 1000 });
    if (!rateLimit.success) {
      return NextResponse.json(
        {
          error: "Rate limit exceeded. Please wait a few minutes before sending another message.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": Math.ceil((rateLimit.reset - Date.now()) / 1000).toString(),
          },
        }
      );
    }

    // 2. Parse request body
    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json(
        { error: "Invalid JSON request payload." },
        { status: 400 }
      );
    }

    // 3. Honeypot check for bots
    if (body.website && String(body.website).trim().length > 0) {
      // Silently return success to mislead spambots without saving
      return NextResponse.json(
        { message: "Your message has been received." },
        { status: 200 }
      );
    }

    // 4. Validate with Zod
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      const issues = validationResult.error.flatten();
      return NextResponse.json(
        {
          error: "Validation failed.",
          details: issues.fieldErrors,
        },
        { status: 422 }
      );
    }

    const { name, email, subject, message } = validationResult.data;

    // 5. Store in Neon PostgreSQL (if configured)
    let savedToDatabase = false;
    let messageId: string | null = null;

    if (isDatabaseConfigured()) {
      const db = getDb();
      if (db) {
        try {
          const [inserted] = await db
            .insert(contactMessages)
            .values({
              name,
              email,
              subject,
              message,
              status: "new",
            })
            .returning({ id: contactMessages.id });

          if (inserted?.id) {
            savedToDatabase = true;
            messageId = inserted.id;
          }
        } catch (dbError) {
          console.error("Database persistence error:", dbError instanceof Error ? dbError.message : "Unknown");
          // Proceed to email notification even if DB fails, ensuring user message is not lost
        }
      }
    } else {
      console.warn("DATABASE_URL is not set. Contact message logged in memory/console only.");
    }

    // 6. Optional email notification via Resend
    let emailSent = false;
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL || "yassa.ashraf.albir@gmail.com";

    if (resendApiKey && resendApiKey !== "your_resend_api_key") {
      try {
        const resend = new Resend(resendApiKey);
        await resend.emails.send({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: contactEmail,
          replyTo: email,
          subject: `[Portfolio Contact] ${subject} - from ${name}`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #080D16; color: #F4F7FB; border-radius: 12px; border: 1px solid #26354A;">
              <h2 style="color: #1677FF; margin-top: 0;">New Contact Form Message</h2>
              <div style="background: #141F30; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
                <p style="margin: 4px 0;"><strong style="color: #A7B4C7;">Name:</strong> ${name}</p>
                <p style="margin: 4px 0;"><strong style="color: #A7B4C7;">Email:</strong> <a href="mailto:${email}" style="color: #54A6FF;">${email}</a></p>
                <p style="margin: 4px 0;"><strong style="color: #A7B4C7;">Subject:</strong> ${subject}</p>
                ${messageId ? `<p style="margin: 4px 0;"><strong style="color: #A7B4C7;">Database ID:</strong> ${messageId}</p>` : ""}
              </div>
              <div style="background: #101827; padding: 16px; border-radius: 8px; border-left: 4px solid #1677FF;">
                <h4 style="margin: 0 0 8px 0; color: #54A6FF;">Message:</h4>
                <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
              <p style="color: #6B7C95; font-size: 12px; margin-top: 24px; text-align: center;">Sent via Yassa Ashraf Portfolio Contact Form</p>
            </div>
          `,
        });
        emailSent = true;
      } catch (emailError) {
        console.error("Resend delivery error:", emailError instanceof Error ? emailError.message : "Unknown");
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully. Thank you for reaching out!",
        meta: {
          savedToDatabase,
          emailSent,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Unhandled contact API error:", error instanceof Error ? error.message : "Unknown");
    return NextResponse.json(
      {
        error: "An unexpected error occurred while processing your request. Please try again later.",
      },
      { status: 500 }
    );
  }
}
