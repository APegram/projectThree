class Auth {
  static onAuthStateChanged(cb) {
    this.cb = cb;
  }

  static init() {
    this.cb(this.getToken() ? localStorage.getItem("id") : undefined);
  }

  static authenticateUser(token, user) {
    localStorage.setItem("token", token);
    localStorage.setItem("id", user.id);
    localStorage.setItem("name", user.name);
    this.cb(user);
  }

  static isUserAuthenticated() {
    return localStorage.getItem("token") !== null;
  }

  static deauthenticateUser() {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    this.cb();
  }

  static getToken() {
    return localStorage.getItem("token");
  }
}

export default Auth;
