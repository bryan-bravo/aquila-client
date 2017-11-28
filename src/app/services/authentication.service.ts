import { Injectable } from '@angular/core';
import {User} from '../models/User';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map'; 

@Injectable()
export class AuthenticationService {
user:User;

constructor(private http:Http) {
   }
  authenticate(username,password){
    let headers = new Headers();
		headers.append('Content-Type','application/json');
		return this.http.post('api/login', {"username":username,"password":password},{headers: headers})
		  .map(res => res.json());
  }
  storeUserData(user){
    // localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
  }


}

