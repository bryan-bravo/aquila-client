import { Component, OnInit } from '@angular/core';
import{AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {User} from '../../models/User';
import { MockDataService } from '../../services/mock-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  usernameFlag:boolean;
  password:string;
  passwordFlag:boolean;
  failedLoginFlag:boolean;
  signInSAML:boolean;//if true sign in with saml, if not sign in with username
  constructor(
    private authenticationService:AuthenticationService,	
    private mockService:MockDataService,
    private router:Router
  ) { } 

  ngOnInit() {
    this.usernameFlag=false;
    this.passwordFlag=false;
    this.failedLoginFlag=false;
    this.signInSAML=true;
  }

  //when login form is submitted
  submit(){    
    if(!this.username) 
      this.usernameFlag=true;

    if(!this.password)
      this.passwordFlag=true;
    //now working with response of authentitication  

    this.mockService.login(this.username,this.password,this.signInSAML).subscribe(response=>{
      // console.log(response)
      //invalid user
      if(response.user==undefined)
        this.failedLoginFlag=true;
      //new user
      else{
        this.authenticationService.storeUserData(response.user);
        this.router.navigate(['/home']);  
      }
    });

  }
  setSAML(value){
    this.signInSAML=value;
  }
}
// this.authenticationService.authenticate(this.username,this.password).subscribe(response=>{
//   //if user exists
//   if(response.username!=null){
//     let user ={};
//      this.authenticationService.storeUserData(user);
//     this.router.navigate(['/home']);
//   }
//   //if user does not exist
//   else{
//     this.failedLoginFlag=true;
//   }
// });