import { Component, OnInit } from '@angular/core';
import{AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {User} from '../../models/User';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:String;
  password:String;
  constructor(
    private authenticationService:AuthenticationService,	
    private router:Router
  ) { } 

  ngOnInit() {
  }
  submit(){
    //make sure both of the forms are filled in
    if(this.username==''){}
      //input required
    if(this.password==''){}
      //password required
    this.authenticationService.authenticate(this.username,this.password).subscribe(response=>{
      // console.log(response)
      //if user
      if(response.username!=null){
        let user = new User(
          response.id,
          response.username
        );
         this.authenticationService.storeUserData(user);
        this.router.navigate(['/home']);
      }
      //if not user
    });

  }
}
