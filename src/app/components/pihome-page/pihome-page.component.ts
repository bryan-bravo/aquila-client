import { Component, OnInit } from '@angular/core';
import {  Router }   from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-pihome-page',
  templateUrl: './pihome-page.component.html',
  styleUrls: ['./pihome-page.component.css']
})
export class PiHomePageComponent implements OnInit {
  name:string;
  firstTimeUser:boolean;
  userInfoPrompt:boolean;
 user:any;

  constructor(private router:Router, private authService:AuthenticationService) { }
 
  ngOnInit() {
    this.name='Bryan';
    this.setUserInfoPrompt();
  }
  navigate(location){
    if(!this.firstTimeUser)
        this.router.navigate([location]);    
    }
  checkIfFirstTimeUser():boolean{
    let user = this.authService.getUserData();
    if(user!=null)
      return false;
    else
      return true;
    
      }
      settingsClicked(){
        this.userInfoPrompt=true;        
      }
      setUserInfoPrompt(){
        if(this.checkIfFirstTimeUser()==true){
          this.firstTimeUser=true;
          this.userInfoPrompt=true;
        }
        else{
          this.firstTimeUser=false;
          this.userInfoPrompt=false;
          //set the user field to user obtained from local storage
        }
      }
  submit(){
    //not first time user
    if(!this.firstTimeUser){
      console.log('put')
      //make put request
      //update user
      //update user in local storage
    }
    //first time user
    else{
      console.log('post')
      
      //make post request
      //set first time user false
      //update user
      //put user in l storage
    }
  }
}
 