import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import {AuthService, User} from './../services/auth.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.checkCredentials();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
