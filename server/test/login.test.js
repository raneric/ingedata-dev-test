import bcrypt from 'bcryptjs';
import { jest } from '@jest/globals';
import httpMocks from 'node-mocks-http';
import { login } from '../src/controller/auth.controller';
import { AUTH_ERROR_MESSAGE, AuthenticationError } from '../src/utils/ApplicationError';
import UserRepository from '../src/repositories/UserRepository';

jest.mock('../src/repositories/UserRepository');
jest.mock('bcryptjs');

describe('Test login process middleware', () => {
  let req, res, next;

  beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should call next with error if username and password are missing', async () => {
    req.body = {};
    await login(req, res, next);

    expect(next).toHaveBeenCalled();
    const error = next.mock.calls[0][0];
    expect(error).toBeInstanceOf(AuthenticationError);
    expect(error.message).toBe(AUTH_ERROR_MESSAGE.missingPwdAndUserName);
  });

  test('should call next with error if user does not exist', async () => {
    req.body = { username: 'john', password: 'secret' };
    const findOneByUsernameMock = jest.spyOn(UserRepository, 'findOneByUsername');
    findOneByUsernameMock.mockResolvedValue(null);
    await login(req, res, next);

    expect(next).toHaveBeenCalled();
    const error = next.mock.calls[0][0];
    expect(error).toBeInstanceOf(AuthenticationError);
    expect(error.message).toBe(`Username john doesn't exist`);
  });

  test('should call next with error if password does not match', async () => {
    req.body = { username: 'john', password: 'secret' };
    const findOneByUsernameMock = jest.spyOn(UserRepository, 'findOneByUsername');
    findOneByUsernameMock.mockResolvedValue({
      id: 1,
      password: 'hashedPassword',
      dataValues: { email: 'john@example.com', name: 'John', usename: 'john' },
    });
    const bcryptCompare = jest.spyOn(bcrypt, 'compare');
    bcryptCompare.mockResolvedValue(false);

    await login(req, res, next);

    expect(next).toHaveBeenCalled();
    const error = next.mock.calls[0][0];
    expect(error).toBeInstanceOf(AuthenticationError);
    expect(error.message).toBe(AUTH_ERROR_MESSAGE.usernamePwdNotMatch);
  });
});
