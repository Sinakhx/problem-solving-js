// Bad
class UserSettings {
  constructor(user) {
    this.user = user;
  }

  changeSettings(settings) {
    if (this.verfityCredentials()) {
      // ...
    }
  }

  verfityCredentials() {
    // ...
  }
}
