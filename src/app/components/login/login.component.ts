import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {User} from '../../models/User';
import { MockDataService } from '../../services/mock-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  usernameFlag: boolean;
  password: string;
  passwordFlag: boolean;
  failedLoginFlag: boolean;
  constructor(
    private authenticationService: AuthenticationService,
    private mockService: MockDataService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.checkIfLoggedIn();
    this.usernameFlag = false;
    this.passwordFlag = false;
    this.failedLoginFlag = false;
  }

  // when login form is submitted
  submit() {
    if (!this.username) {
      this.usernameFlag = true;
      return;
    }

    if (!this.password) {
      this.passwordFlag = true;
      return;
    }
    this.authenticationService.authenticate(this.username, this.password).subscribe(response => {
      // if user exists
      if (response.user.username != null) {
         this.authenticationService.storeUserData(response.user);
         this.authenticationService.storeJWT(response.jwt);
        this.router.navigate(['/home']);
      } else {
        // handle the bug Unexpected end of JSON input at Object.parse
        this.failedLoginFlag = true;
      }
    });
  }
  checkIfLoggedIn() {
    if (this.authenticationService.loggedIn()) {
      this.router.navigate(['/home']);
    }
  }
}

