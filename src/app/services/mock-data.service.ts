import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import {Users,Proposals} from './mock-data';
import { of } from 'rxjs/observable/of';
@Injectable()
export class MockDataService {
  private usersUrl='api/users';
  private idSeed=100;
  constructor(
    private http: HttpClient
    ) { }
    getUsers(): Observable<any[]> {
      return this.http.get<any[]>(this.usersUrl);
    }
    login(identifier,password,SAML):Observable<any>  {
      let response={'user':{}};
      let users= Users;
      let user = users.find((element)=>{
        if(SAML){
          if(element.email==identifier && element.password==password)
          return element;
        }else{
          if(element.username==identifier && element.password==password)
          return element;
        }

      });
      response.user=user;
      return of(response);
      // return this.http.post<any[]>(this.usersUrl);
    }
    createUser(user){
      let response={'user':{}};
      user.id=this.idSeed++;
      let index = Users.findIndex((element)=>{
        if(element.email==user.email){
          return element;
        }
      }); 
      Users[index]=user;
      response.user = user;
      return of(response);
    }
    updateUser(user){
      let response={'user':{}};
      let index = Users.findIndex((element)=>{
        if(element.email==user.email){
          return element;
        }
      }); 
      Users[index]=user;
      response.user = user;
      return of(response);
    }
    getCondensedProposals(userid){
      let response={'proposals':[]};
      Proposals.forEach((proposal)=>{
        if(proposal.user.id==userid)
          response.proposals.push(proposal);
      });
      return of(response)
    }
    createProposal(proposalName,userId){
      let response ={'proposal':{}};
      let index = Users.findIndex((element)=>{
        if(element.id==userId){
          return element;
        }
      }); 
      let newProposal ={
        'id':this.idSeed++,
        'proposalName':proposalName,
        'dateCreated': new Date(),
        'status':'draft',
        'user':  Users[index],
        requiredForms:['intake','budget']
        };
      Proposals.push(newProposal); 
      response.proposal= newProposal;  
      return of(response);    
      }
      getProposal(id){

      }
    }  

   
// const users = [
//   { id: 1, username:'Aquaman', password:'bork', firstName: 'Arthur', lastName:'Curry', email:'text@email.com',phone:'22222222'},
//   { id: 2, username:'Wonderwoman', password:'bork',  firstName: 'Diana',lastName:'Prince',email:'text@email.com',phone:'22222222' },
//   { id: 3, username:'Batman', password:'bork',  firstName: 'Bruce', lastName:'Wayne',email:'text@email.com',phone:'22222222'},
//   { id: 4, username:'Superman', password:'bork',  firstName: 'Clark', lastName:'Kent',email:'text@email.com',phone:'22222222'}
// ];