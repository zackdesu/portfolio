import { rateLimit } from "express-rate-limit";

export const apiRateLimter = rateLimit({
  windowMs: 1000 * 60 * 60,
  max: 3,
  message: {
    message: "Form submission limit reached.",
  },
});
