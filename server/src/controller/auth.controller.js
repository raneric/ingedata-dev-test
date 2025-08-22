import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import UserRepository from "../repositories/UserRepository.js";
import { AuthenticationError } from "../utils/ApplicationError.js";

async function login(req, res, next) {
  const { username, password } = req.body;

  if (!username && !password) {
    next(new AuthenticationError("You must provide username and password"));
  }

  try {
    const user = await UserRepository.findOneByUsername(username);
    const passwordMatch = await bcrypt.compare(password, user.password);
    console.log(passwordMatch);

    if (!passwordMatch) {
      throw new AuthenticationError("Password or username  doesn't match");
    }

    const token = await jwt.sign(user.dataValues, process.env.AUTH_SECRET, {
      expiresIn: 8600,
    });

    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
}

async function logout(req, res, next) {
  res.json({ status: "ok" });
}

async function signin(req, res, next) {
  const userInfo = req.body;
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(userInfo.password, salt);
  userInfo.password = hashedPassword;
  try {
    UserRepository.signIn(userInfo);
    res.json({ status: "ok" });
  } catch (error) {
    next(error);
  }
}

export { login, logout, signin };
