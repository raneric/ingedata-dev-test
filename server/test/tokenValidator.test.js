import httpMocks from "node-mocks-http";
import jwt from "jsonwebtoken";
import validateToken from "../src/middleware/auth.middleware.js";
import {
  AUTH_ERROR_MESSAGE,
  AuthenticationError,
  AuthorizationError,
} from "../src/utils/ApplicationError.js";
import { jest, describe, test, expect, beforeEach } from "@jest/globals";

jest.mock("jsonwebtoken");

const jwtVerifyMock = jest.spyOn(jwt, "verify");

describe("validateToken middleware", () => {
  let req, res, next;

  beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = jest.fn();
  });

  test("should call next with AuthorizationError if no Authorization header", () => {
    req.header = jest.fn().mockReturnValue(undefined);

    validateToken(req, res, next);

    expect(next).toHaveBeenCalled();
    const error = next.mock.calls[0][0];
    expect(error).toBeInstanceOf(AuthorizationError);
    expect(error.message).toBe(AUTH_ERROR_MESSAGE.missingCredentials);
  });

  test("should call next with AuthenticationError if token is invalid", () => {
    const fakeToken = "fake.token.value";
    req.header = jest.fn().mockReturnValue(`Bearer ${fakeToken}`);

    jwtVerifyMock.mockImplementation((token, secret, callback) => {
      callback(new Error("jwt malformed"), null);
    });

    validateToken(req, res, next);

    expect(jwtVerifyMock).toHaveBeenCalledWith(
      fakeToken,
      process.env.AUTH_SECRET,
      expect.any(Function)
    );

    const error = next.mock.calls[0][0];
    expect(error).toBeInstanceOf(AuthenticationError);
    expect(error.message).toBe("jwt malformed");
  });

  test("should call next without error if token is valid", () => {
    const fakeToken = "valid.token.value";
    req.header = jest.fn().mockReturnValue(`Bearer ${fakeToken}`);

    jwtVerifyMock.mockImplementation((token, secret, callback) => {
      callback(null, { id: "user123", email: "test@example.com" });
    });

    validateToken(req, res, next);

    expect(next).toHaveBeenCalledWith();
  });
});
