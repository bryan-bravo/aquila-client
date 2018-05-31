import { Injectable } from '@angular/core';
import {User} from '../models/User';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Proposal } from '../models/PreAward/Proposal';
import {IntakeForm} from '../models/PreAward/IntakeForm';
import { EquipmentForm } from '../models/PreAward/EquipmentForm';
import { EconomicInterestPI } from '../models/PreAward/EconomicInterestPI';
import {TimeLine, Stage} from '../models/PreAward/TimeLine';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class PreawardService {
  constructor(private http: HttpClient, private authService: AuthenticationService) {
  }
  newProposal(proposalName): Observable<Proposal> {
    const userId = this.authService.getUserData().id;
    const headers = new HttpHeaders({'Authorization': this.authService.getJWT()});
    return this.http.post<Proposal>(`api/proposal/`, {"proposalName": proposalName, "userId": userId}, {headers: headers});
  }
  // returns the proposals of a user
  getProposals(): Observable<Proposal[]> {
    const userId = this.authService.getUserData().id;
    const headers = new HttpHeaders({'Authorization': this.authService.getJWT()});
    return this.http.get<Proposal[]>(`api/proposals/${userId}`, {headers: headers});
  }
  // get proposal by id
  getProposal(id): Observable<Proposal> {
    const headers = new HttpHeaders({'Authorization': this.authService.getJWT()});
    return this.http.get<Proposal>(`api/proposal/${id}`, {headers: headers});
  }
  getAllProposals(): Observable<Proposal[]> {
    const headers = new HttpHeaders({'Authorization': this.authService.getJWT()});
    return this.http.get<Proposal[]>(`api/proposals/`, {headers: headers});
  }
  // intake
  updateIntake(intakeForm): Observable<IntakeForm> {
    const headers = new HttpHeaders({'Authorization': this.authService.getJWT()});
    return this.http.
    put<IntakeForm>(
      `api/proposal/${intakeForm.proposalId}/intake/${intakeForm.id}`, JSON.parse(JSON.stringify(intakeForm)), {headers: headers});
  }
  getIntake(proposalId, intakeId) {

  }
  // equipment
  getEquipment(id): Observable<EquipmentForm> {
    return this.http.get<EquipmentForm>(`api/equipment/${id}`);
  }
  updateEquipment(equipmentForm): Observable<EquipmentForm> {
    const headers = new HttpHeaders({'Authorization': this.authService.getJWT()});
    // tslint:disable-next-line:max-line-length
    return this.http.put<EquipmentForm>(`api/proposal/${equipmentForm.proposalId}/equipment/${equipmentForm.id}`, JSON.parse(JSON.stringify(equipmentForm)), {headers: headers});
  }
  // economic interest
  getEconomicInterestPI(id): Observable<EconomicInterestPI> {
    return this.http.get<EconomicInterestPI>(`api/proposal/economicinterest/${id}`);
  }
  updateEconomicInterestPI(economicInterestPI): Observable<EconomicInterestPI> {
    return this.http.
    put<EconomicInterestPI>(`api/proposal/editeconomicinterest/${economicInterestPI.id}`, JSON.parse(JSON.stringify(economicInterestPI)));
  }
  // conflict of interest
  updateConflictOfInterest(coiForm) {
    const headers = new HttpHeaders({'Authorization': this.authService.getJWT()});

  }
  // timeline
  patchTimeline(proposalId, timeline): Observable<TimeLine> {
    const headers = new HttpHeaders({'Authorization': this.authService.getJWT()});
    const body = {
      'principalInvestigator': timeline.principalInvestigator,
      'coPi': timeline.coPi,
      'proposalName': timeline.proposalName,
      'fundingAgency': timeline.fundingAgency,
      'uasDueDate': timeline.uasDueDate,
      'sponsorDueDate': timeline.sponsorDueDate,
      'finalSign': timeline.finalSign
    };
      return this.http.patch<TimeLine>(`api/proposal/${proposalId}/timeline/${timeline.id}`, body, {headers: headers});
  }
  putTimeline(proposalId, timeline): Observable<TimeLine> {
    const headers = new HttpHeaders({'Authorization': this.authService.getJWT()});
    return this.http.
    put<TimeLine>(`api/proposal/${proposalId}/timeline/${timeline.id}`, JSON.parse(JSON.stringify(timeline)), {headers: headers});
  }
  // stage
  createStage(timelineId): Observable<Stage> {
    const headers = new HttpHeaders({'Authorization': this.authService.getJWT()});
    const stage = JSON.parse(JSON.stringify(new Stage()));
    return this.http.post<Stage>(`api/proposal/timeline/${timelineId}/stage/`, stage, {headers: headers});
  }
  saveStage(timelineId, stage): Observable<Stage> {
    const headers = new HttpHeaders({'Authorization': this.authService.getJWT()});
    stage = JSON.parse(JSON.stringify(stage));
    return this.http.put<Stage>(`api/timeline/${timelineId}/stage/update/${stage.id}`, stage, {headers: headers});
  }
  deleteStage(stageId) {
    const headers = new HttpHeaders({'Authorization': this.authService.getJWT()});
    return this.http.delete(`api/timeline/stage/${stageId}`, {headers: headers});
  }
  reorderStage(stageId, indexToPush) {
    const headers = new HttpHeaders({'Authorization': this.authService.getJWT()});
    return this.http.get(`api/timeline/stage/${stageId}/order/${indexToPush}`, {headers: headers});
  }
  uploadFile(proposalId, fileId, file ) {
    const headers = new HttpHeaders({'Authorization': this.authService.getJWT()});
    const formData = new FormData();
    formData.append('file', file);
    return this.http.put(`api/proposal/${proposalId}/fileupload/${fileId}`, formData, {headers: headers});
  }
  downloadFile(fileId) {
    const headers = new HttpHeaders({'Authorization': this.authService.getJWT()});
    return this.http.get(`api/downloadfile/${fileId}`,
    {responseType: 'blob', observe: 'response', headers: headers});
  }
  deleteFile(timelineId, stageId, fileId) {
    // `/timeline/{timelineId}/stage/{stageId}/deletefile/{fileId}`
    const headers = new HttpHeaders({'Authorization': this.authService.getJWT()});
    return this.http.delete(`api/timeline/${timelineId}/stage/${stageId}/deletefile/${fileId}`);
  }

}
