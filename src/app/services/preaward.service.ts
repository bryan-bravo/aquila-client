import { Injectable } from '@angular/core';
import {User} from '../models/User';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Proposal } from '../models/PreAward/Proposal';
import {IntakeForm} from '../models/PreAward/IntakeForm';
import {TimeLine, Stage} from '../models/PreAward/TimeLine';

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
  getProposal(id): Observable<Proposal> {// 3
    return this.http.get<Proposal>('api/proposal/' + id); // 4, start going back
  }
  updateIntake(intakeForm): Observable<IntakeForm> {
  return this.http.put<IntakeForm>('api/intake/' + intakeForm.id, JSON.parse(JSON.stringify(intakeForm)));
  }
  // timeline
  patchTimeline(proposalId, timeline): Observable<TimeLine> {
    const body = {
      'principalInvestigator': timeline.principalInvestigator,
      'coPi': timeline.coPi,
      'proposalName': timeline.proposalName,
      'fundingAgency': timeline.fundingAgency,
      'uasDueDate': timeline.uasDueDate,
      'sponsorDueDate': timeline.sponsorDueDate,
      'finalSign': timeline.finalSign
    };
      return this.http.patch<TimeLine>(`api/proposal/${proposalId}/timeline/${timeline.id}`, body);
  }
  putTimeline(proposalId, timeline): Observable<TimeLine> {
    return this.http.put<TimeLine>(`api/proposal/${proposalId}/timeline/${timeline.id}`, JSON.parse(JSON.stringify(timeline)));
  }
  // stage
  createStage(timelineId): Observable<Stage> {
    const stage = JSON.parse(JSON.stringify(new Stage()));
    return this.http.post<Stage>(`api/proposal/timeline/${timelineId}/stage/`, stage);
  }
  saveStage(timelineId, stage): Observable<Stage> {
    stage = JSON.parse(JSON.stringify(stage));
    return this.http.put<Stage>(`api/timeline/${timelineId}/stage/update/${stage.id}`, stage);
  }
  deleteStage(stageId) {
    return this.http.delete(`api/timeline/stage/${stageId}`);
  }
  reorderStage(stageId, indexToPush) {
    return this.http.get(`api/timeline/stage/${stageId}/order/${indexToPush}`);
  }
}
