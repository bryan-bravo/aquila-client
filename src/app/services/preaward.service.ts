import { Injectable } from '@angular/core';
import {User} from '../models/User';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PreawardService {
user: User;
  constructor(private http: Http) {
    this.user = JSON.parse(localStorage.getItem('user'));
  }
  newProposal(proposalName) {
    const userId = this.user.id;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('api/proposal', {"proposalName": proposalName,"userId": userId}, {headers: headers}).map(res => res.json());
  }
}
