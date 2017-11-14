import { Component, OnInit } from '@angular/core';
import{AuthenticationService} from '../../services/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:String;
  password:String;
  constructor(private authenticationService:AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.testConnectionWithServer().subscribe(response=>{
      console.log(response);
    });
  }
  submit(){
    //make sure both of the forms are filled in
    if(this.username==''){}
      //input required
    if(this.password==''){}
      //password required

    //invoke service
    // this.authenticationService.login(this.username,this.password).subscribe( user =>{});
    
    //if not a valid user, display message
    //If valid user,reroute to Homepage,put the user in session scope

  }
}
