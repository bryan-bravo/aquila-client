import { Injectable } from '@angular/core';
import {User} from '../models/User';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Proposal } from '../models/PreAward/Proposal';
import {IntakeForm} from '../models/PreAward/IntakeForm';
import { EquipmentForm } from '../models/PreAward/EquipmentForm';
import { EconomicInterestPI } from '../models/PreAward/EconomicInterestPI';
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
    return this.http.get<Proposal>('api/proposal/' + id);// 4, start going back
  }
  getEquipment(id): Observable<EquipmentForm> {
    return this.http.get<EquipmentForm>('api/equipment/' + id);
  }
  updateIntake(intakeForm): Observable<IntakeForm>{
  console.log(typeof JSON.parse(JSON.stringify(intakeForm)))
  //console.log(intakeForm)
  return this.http.put<IntakeForm>('api/intake/'+intakeForm.id, JSON.parse(JSON.stringify(intakeForm)));
  }
  updateEquipment(equipmentForm): Observable<EquipmentForm>{
    console.log(typeof JSON.parse(JSON.stringify(equipmentForm)))
    return this.http.put<EquipmentForm>('api/equipment/'+equipmentForm.id, JSON.parse(JSON.stringify(equipmentForm)));
  }
  updateEconomicInterestPI(economicInterestPI): Observable<EconomicInterestPI>{
    console.log(typeof JSON.parse(JSON.stringify(economicInterestPI)))
    return this.http.put<EconomicInterestPI>('api/proposal/editeconomicinterest/'+economicInterestPI.id, JSON.parse(JSON.stringify(economicInterestPI)));  
  }
  saveEquipmentForm(equipmentForm): Observable<EquipmentForm> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<EquipmentForm>('api/equipment/',equipmentForm, {headers: headers});
  }
}
