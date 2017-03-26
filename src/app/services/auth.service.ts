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

@Injectable()
export class AuthService {

  constructor() { }

  logout() {
    // remove from local storage
    // see http://4dev.tech/2016/03/login-screen-and-authentication-with-angular2/
  }

  login(user: User): boolean {
    let authenticatedUser = users.find(u => u.email === user.email);
    if (authenticatedUser && authenticatedUser.password === user.password) {
      return true;
    }
    return false;
  }

  checkCredentials(): boolean {
    // TODO: check in local storage
    return true;
  }

}
