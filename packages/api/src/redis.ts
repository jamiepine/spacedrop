import IORedis from "ioredis";

const config = {
  host: process.env.REDIS_HOST || "127.0.0.1",
  port: Number(process.env.REDIS_PORT) || 6379,
  database: Number(process.env.REDIS_DATABASE) || 0,
};

const redis = new IORedis(config);
redis.connect(() => console.log("Connected to Redis"));
export default redis;
