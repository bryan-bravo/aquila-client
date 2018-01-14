import { Injectable } from '@angular/core';
import {User} from '../models/User';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
user: User;

constructor(private http: Http) {
   }
  authenticate(username, password) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('api/login', {"username": username, "password": password}, {headers: headers}).map(res => res.json());
  }
  storeUserData(user) {
    // localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
  }
  getUserData() {
    return JSON.parse(localStorage.getItem('user'));
  }
  // typescript object
  getUser() {
    const user = JSON.parse(localStorage.getItem('user'));
    return new User(user.id, user.username, user.firstName, user.lastName, user.email, user.phone);
  }
  loggedIn() {
    if (localStorage.getItem('user')) {
      return true;
    } else {
      return false;
    }
  }
  logout() {
    localStorage.clear();
  }


}

