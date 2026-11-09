interface RateLimitEntry {
  count: number;
  resetAt: number;
}

// In-memory cache for IP requests within a serverless instance
const ipTracker = new Map<string, RateLimitEntry>();

// Clean up expired entries every 5 minutes to prevent memory leaks
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    for (const [ip, entry] of ipTracker.entries()) {
      if (entry.resetAt <= now) {
        ipTracker.delete(ip);
      }
    }
  }, 5 * 60 * 1000);
}

export interface RateLimitOptions {
  limit?: number; // max requests
  windowMs?: number; // time window in milliseconds
}

export function checkRateLimit(
  identifier: string,
  options: RateLimitOptions = {}
): { success: boolean; remaining: number; reset: number } {
  const limit = options.limit ?? 5; // default 5 submissions
  const windowMs = options.windowMs ?? 15 * 60 * 1000; // default 15 minutes
  const now = Date.now();

  const current = ipTracker.get(identifier);

  if (!current || current.resetAt <= now) {
    ipTracker.set(identifier, {
      count: 1,
      resetAt: now + windowMs,
    });
    return {
      success: true,
      remaining: limit - 1,
      reset: now + windowMs,
    };
  }

  if (current.count >= limit) {
    return {
      success: false,
      remaining: 0,
      reset: current.resetAt,
    };
  }

  current.count += 1;
  return {
    success: true,
    remaining: limit - current.count,
    reset: current.resetAt,
  };
}
