import { Injectable } from '@angular/core';

export class User {
  constructor(
    public email: string,
    public password: string) { }
}

let users = [
  new User('admin@admin.com', 'admin'),
  new User('user@user.com', 'user')
];

// see http://4dev.tech/2016/03/login-screen-and-authentication-with-angular2/
@Injectable()
export class AuthService {

  constructor() { }

  logout() {
     localStorage.removeItem("user");
  }

  login(user: User): boolean {
    let authenticatedUser = users.find(u => u.email === user.email);
    if (authenticatedUser && authenticatedUser.password === user.password) {
      localStorage.setItem("user", JSON.stringify(authenticatedUser));
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem("user") === null) {
        return false;
    }
    return true;
  }

}
