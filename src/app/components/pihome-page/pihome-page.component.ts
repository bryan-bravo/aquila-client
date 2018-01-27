import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import { MockDataService } from '../../services/mock-data.service';

@Component({
  selector: 'app-pihome-page',
  templateUrl: './pihome-page.component.html',
  styleUrls: ['./pihome-page.component.css']
})
export class PiHomePageComponent implements OnInit {
  firstTimeUser: boolean;
  userInfoPrompt: boolean;
  user: any;
  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private mockService: MockDataService
  ) { }
  ngOnInit() {
    this.user = this.authService.getUserData();
    this.setUserInfoPrompt();
  }
  setUserInfoPrompt() {
    // tslint:disable-next-line:triple-equals
    if (this.checkIfFirstTimeUser() == true) {
      this.firstTimeUser = true;
      this.userInfoPrompt = true;
    } else {
      this.firstTimeUser = false;
      this.userInfoPrompt = false;
    }
  }
  // checks if user has username, meaning they are in our systen
  checkIfFirstTimeUser(): boolean {
    if (this.user.username == null) {
      return true;
    } else {
      return false;
    }
  }

  // makes sure forms are properly filled out
  canSubmit() {
    // implement based off of any forms empty and if username is valid
    return true;
  }
  // when form fields are submitted
  submit() {
    // not first time user
    if (!this.firstTimeUser) {
      this.authService.editUser(this.user).subscribe((user) => {
        this.user = user;
        this.authService.storeUserData(this.user);
        this.firstTimeUser = false;
        this.userInfoPrompt = false;
      });
    } else {
    // first time user (need saml to implement cause our db only has populated users)
      this.authService.saveUser(this.user).subscribe((user) => {
        this.user = user;
        this.authService.storeUserData(this.user);
        this.firstTimeUser = false;
        this.userInfoPrompt = false;
      });
    }
  }
  // stops routing if first time using
  navigate(location) {
    if (!this.firstTimeUser) {
      this.router.navigate([location]);
    }
  }
  // prompts form fields
  settingsClicked() {
    this.userInfoPrompt = true;
  }
  // new user username validation
  validateUsername() {
    console.log(this.user.username);
  }
}
