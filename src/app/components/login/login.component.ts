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
    this.authenticationService.authenticate(this.username, this.password).subscribe(user => {
      // if user exists
      if (user.username != null) {
         this.authenticationService.storeUserData(user);
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
 // // now working with response of authentitication
    // this.mockService.login(this.username, this.password).subscribe(response => {
    //   // invalid user
    //   if (response.user == undefined) {
    //     this.failedLoginFlag = true;
    //   // new user
    // } else {
    //     this.authenticationService.storeUserData(response.user);
    //     this.router.navigate(['/home']);
    //   }
