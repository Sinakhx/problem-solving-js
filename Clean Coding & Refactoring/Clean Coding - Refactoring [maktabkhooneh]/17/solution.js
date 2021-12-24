// Good - SRP (Single Responsibility Principle)
class UserAuth {
  constructor(user) {
    this.user = user;
  }

  verfityCredentials() {
    // ...
  }
}

class UserSettings {
  constructor(user) {
    this.user = user;
    this.auth = new UserAuth(user);
  }

  changeSettings(settings) {
    if (this.auth.verfityCredentials()) {
      // ...
    }
  }
}
