const User = require('../user/user.model');
const RefreshToken = require('./refreshToken.model');
const moment = require('moment-timezone');
const { jwtExpirationInterval } = require('../../../config/vars');

/**
 * Returns a formated object with tokens
 * @private
 */
function generateTokenResponse(user, accessToken) {
  const tokenType = 'Bearer';
  const refreshToken = RefreshToken.generate(user).token;
  const expiresIn = moment().add(jwtExpirationInterval, 'minutes');
  return {
    tokenType, accessToken, refreshToken, expiresIn,
  };
}


/**
 * Returns jwt token if registration was successful
 * @public
 */
exports.register = async (userData) => {
  try {
    const user = await new User(userData).save();
    const userTransformed = user.transform();
    const token = generateTokenResponse(user, user.token());
    return { token, user: userTransformed };
  } catch (error) {
    throw User.checkDuplicateEmail(error);
  }
};

/**
 * Returns jwt token if valid username and password is provided
 * @public
 */
exports.login = async (userData) => {
  try {
    const { user, accessToken } = await User.findAndGenerateToken(userData);
    const token = generateTokenResponse(user, accessToken);
    const userTransformed = user.transform();
    return { token, user: userTransformed };
  } catch (error) {
    throw error;
  }
};

/**
 * login with an existing user or creates a new one if valid accessToken token
 * Returns jwt token
 * @public
 */
exports.oAuth = async (user) => {
  try {
    const accessToken = user.token();
    const token = generateTokenResponse(user, accessToken);
    const userTransformed = user.transform();
    return { token, user: userTransformed };
  } catch (error) {
    throw error;
  }
};

/**
 * Returns a new jwt when given a valid refresh token
 * @public
 */
exports.refresh = async ({ email, refreshToken }) => {
  try {
    const refreshObject = await RefreshToken.findOneAndRemove({
      userEmail: email,
      token: refreshToken,
    });
    const { user, accessToken } = await User.findAndGenerateToken({ email, refreshObject });
    return generateTokenResponse(user, accessToken);
  } catch (error) {
    throw error;
  }
};
