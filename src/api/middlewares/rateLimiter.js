const RateLimit = require('express-rate-limit');
const error = require('../middlewares/error');
const { env, rateLimitTime, rateLimitRequest } = require('../../config/vars');

module.exports = () => {
  if (env === 'production') {
    return new RateLimit({
      windowMs: rateLimitTime * 60 * 1000, // 15 minutes
      max: rateLimitRequest, // limit each IP to 30 requests per windowMs
      delayMs: 0,
      handler: error.rateLimitHandler,
    });
  }
  return new RateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 3000, // limit each IP to 3000 requests per windowMs
    delayMs: 0,
    handler: error.rateLimitHandler,
  });
};
