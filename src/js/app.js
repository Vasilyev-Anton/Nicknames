export default class Validator {
  static validateUsername(username) {
    const regex = /^[^?!-_0-9]\D/;
    const digitRegex = /\d{4,}/;
    const endRegex = /[-_]$/;

    return (
      regex.test(username)
      && !digitRegex.test(username)
      && !endRegex.test(username)
    );
  }
}
