import rateLimit from "express-rate-limit";

const apiRateLimiter = rateLimit({
  windowMs: 1000 * 60 * 60,
  max: 3,
  message: { message: "Form submission limit reached" },
});

export default apiRateLimiter;
