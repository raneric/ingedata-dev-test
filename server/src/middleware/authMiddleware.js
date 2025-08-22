import jwt from "jsonwebtoken";
import { AuthenticationError, AuthorizationError } from "../utils/ApplicationError.js";

function validateToken(req, res, next) {
  const auth = req.header("Authorization");

  if (!auth) {
    next(new AuthorizationError("Missing credentials"));
  } else {
    const token = auth.split(" ").at(-1);
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
