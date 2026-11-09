import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(120, { message: "Name cannot exceed 120 characters." })
    .trim(),
  email: z
    .string()
    .email({ message: "Please provide a valid email address." })
    .max(255, { message: "Email cannot exceed 255 characters." })
    .toLowerCase()
    .trim(),
  subject: z
    .string()
    .min(3, { message: "Subject must be at least 3 characters." })
    .max(200, { message: "Subject cannot exceed 200 characters." })
    .trim(),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(3000, { message: "Message cannot exceed 3,000 characters." })
    .trim(),
  // Honeypot field: invisible to real users, if filled by bot submission is rejected
  website: z.string().max(0, { message: "Spam detected." }).optional().or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
