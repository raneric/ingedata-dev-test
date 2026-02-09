import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import UserRepository from '../repositories/UserRepository.js';
import { AuthenticationError } from '../utils/ApplicationError.js';
import { generateAccessToken, generateRefreshToken } from '../utils/tokenHelper.js';

async function login(req, res, next) {
  const { username, password } = req.body;

  if (!username && !password) {
    return next(new AuthenticationError('You must provide username and password'));
  }

  try {
    const user = await UserRepository.findOneByUsername(username);

    if (!user) {
      throw new AuthenticationError(`Username ${username} doesn't exist`);
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new AuthenticationError("Password and username  doesn't match");
    }

    const tokenData = {
      id: user.id,
      email: user.dataValues.email,
      name: user.dataValues.name,
      username: user.dataValues.usename,
    };

    const accessToken = generateAccessToken(tokenData);
    const refreshToken = generateRefreshToken(tokenData);

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/auth/refresh',
    });

    res.status(200).json({ token: accessToken });
  } catch (error) {
    return next(error);
  }
}

async function signin(req, res, next) {
  const userInfo = req.body;
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(userInfo.password, salt);
  userInfo.password = hashedPassword;
  try {
    await UserRepository.signIn(userInfo);
    res.json({ status: 'ok' });
  } catch (error) {
    return next(error);
  }
}

async function refreshToken(req, res, next) {
  const token = req.cookies?.refreshToken;

  if (!token) {
    const error = new AuthenticationError('Refresh token invalid or not found');
    return next(error);
  }

  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) {
      const error = new AuthenticationError(err.message);
      return next(error);
    }

    const accessToken = generateAccessToken({ user });
    res.json({ accessToken });
  });
}

export { login, signin, refreshToken };
