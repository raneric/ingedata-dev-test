import jwt from 'jsonwebtoken';

const generateAccessToken = (tokenData) => {
  return jwt.sign(tokenData, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
};

const generateRefreshToken = (tokenData) => {
  return jwt.sign(tokenData, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1d' });
};

export { generateAccessToken, generateRefreshToken };
