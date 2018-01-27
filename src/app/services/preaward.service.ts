import { Injectable } from '@angular/core';
import {User} from '../models/User';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Proposal } from '../models/PreAward/Proposal';
@Injectable()
export class PreawardService {
user: User;
  constructor(private http: HttpClient) {
    this.user = JSON.parse(localStorage.getItem('user'));
  }
  newProposal(proposalName): Observable<Proposal> {
    const userId = this.user.id;
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<Proposal>('api/proposal/', {"proposalName": proposalName, "userId": userId}, {headers: headers});
  }
  // returns the proposals of a user
  getProposals(): Observable<Proposal[]> {
    const userId = this.user.id;
    return this.http.get<Proposal[]>('api/proposals/' + userId);
  }
  // get proposal by id
  getProposal(id): Observable<Proposal> {
    return this.http.get<Proposal>('api/proposal/' + id);
  }
}
