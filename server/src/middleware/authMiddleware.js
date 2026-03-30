import jwt from 'jsonwebtoken';
import {
  AUTH_ERROR_MESSAGE,
  AuthenticationError,
  AuthorizationError,
} from '../utils/ApplicationError.js';

function validateToken(req, res, next) {
  const auth = req.header('Authorization');
  if (!auth) {
    next(new AuthorizationError(AUTH_ERROR_MESSAGE.missingCredentials));
  } else {
    const token = auth.split(' ').at(-1);
    // eslint-disable-next-line no-undef
    jwt.verify(token, process.env.AUTH_SECRET, (err, user) => {
      if (err) {
        next(new AuthenticationError(err.message));
      } else {
        next();
      }
    });
  }
}

export default validateToken;
