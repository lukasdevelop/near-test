import { createClient } from "redis";
import { RateLimiterRedis } from "rate-limiter-flexible";
import { Response, Request, NextFunction } from "express";
import { ApiError } from "@helpers/api-error";

const redisClient = createClient({
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
});

redisClient.on("error", (err) => console.log("Redis Client Error", err));

const limiter = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: "rateLimiter",
  points: 5, // 10 requests
  duration: 5, // per 1 second by IP
});

export default async function rateLimiter(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  try {
    await limiter.consume(request.ip);

    return next();
  } catch (err) {
    throw new ApiError(`Too many requests ---> ${err}`, 429);
  }
}
