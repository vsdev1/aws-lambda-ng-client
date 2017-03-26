import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService, User } from './../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user = new User('', '');
  public errorMsg = '';

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    if (!this.authService.login(this.user)) {
      this.errorMsg = 'Failed to login';
    } else {
      this.router.navigate(['home']);
    }
  }
}
