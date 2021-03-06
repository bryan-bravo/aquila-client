import { Injectable } from '@angular/core';
import {User} from '../models/User';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {

constructor(private http: HttpClient) {
   }
  authenticate(username, password): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('api/login', {"username": username, "password": password}, {headers: headers});
  }
  saveUser(user): Observable<User> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${this.getJWT()}`);
    return this.http.post<User>('api/saveuser', user, {headers: headers});
  }
  editUser(user): Observable<User> {
    const headers = new HttpHeaders({'Authorization': this.getJWT()});
    return this.http.put<User>(`api/user/${user.id}`, user, {headers: headers});
  }
  storeUserData(user) {
    // localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }
  getUserData() {
    return JSON.parse(localStorage.getItem('user'));
  }
  storeJWT(jwt) {
    localStorage.setItem('jwt', jwt);
  }
  getJWT() {
    return localStorage.getItem('jwt');
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

