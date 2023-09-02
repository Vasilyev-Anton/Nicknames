import Validator from '../app';

test('should return true for valid usernames', () => {
  expect(Validator.validateUsername('username123')).toBe(true);
  expect(Validator.validateUsername('user-123-name')).toBe(true);
  expect(Validator.validateUsername('us3r-n4m3')).toBe(true);
  expect(Validator.validateUsername('user---name')).toBe(true);
  expect(Validator.validateUsername('user45-5na2me')).toBe(true);
  expect(Validator.validateUsername('user____name')).toBe(true);
});

test('should return false for invalid usernames', () => {
  expect(Validator.validateUsername('123user')).toBe(false);
  expect(Validator.validateUsername('-username')).toBe(false);
  expect(Validator.validateUsername('username-')).toBe(false);
  expect(Validator.validateUsername('_username')).toBe(false);
  expect(Validator.validateUsername('username_')).toBe(false);
  expect(Validator.validateUsername('user_1234_name')).toBe(false);
});
