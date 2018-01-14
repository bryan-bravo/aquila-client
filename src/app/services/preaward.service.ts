import { Injectable } from '@angular/core';
import {User} from '../models/User';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PreawardService {
user: User;
  constructor(private http: HttpClient) {
    this.user = JSON.parse(localStorage.getItem('user'));
  }
  newProposal(proposalName) {
    const userId = this.user.id;
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('api/proposal', {"proposalName": proposalName,"userId": userId}, {headers: headers});
  }
}
