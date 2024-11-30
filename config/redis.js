require("dotenv").config();
const session = require("express-session");
const RedisStore = require("connect-redis").default;
const redis = require("ioredis");

const redisClient = new redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});

module.exports = session({
  store: new RedisStore({ client: redisClient }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, httpOnly: true },
});
