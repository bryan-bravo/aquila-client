import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../../services/mock-data.service';
import { AuthenticationService } from '../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor( private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.checkIfLoggedIn();
  }
  checkIfLoggedIn() {
    if (this.authenticationService.loggedIn()) {
      this.router.navigate(['/home']);
    }
  }
}
