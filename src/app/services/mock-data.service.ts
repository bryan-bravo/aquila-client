import { Injectable } from '@angular/core';
import {  HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import {Users, Proposals, Timeline} from './mock-data';
import { of } from 'rxjs/observable/of';
import { TimeLine } from '../models/PreAward/TimeLine';
@Injectable()
export class MockDataService {
  private idSeed = 100;
  constructor(
    ) { }
    login(identifier, password): Observable<any>  {
      const response = {'user': {}};
      const users = Users;
      const user = users.find((element) => {
          if (element.username === identifier && element.password === password) {
            return element;
          }
      });
      response.user = user;
      return of(response);
    }
    createUser(user) {
      const response = {'user': {}};
      user.id = this.idSeed++;
      const index = Users.findIndex((element) => {
        if (element.email ===  user.email) {
          return element;
        }
      });
      Users[index] = user;
      response.user = user;
      return of(response);
    }
    updateUser(user) {
      const response = {'user': {}};
      const index = Users.findIndex((element) => {
        if (element.email === user.email) {
          return element;
        }
      });
      Users[index] = user;
      response.user = user;
      return of(response);
    }
    getCondensedProposals(userid) {
      const response = {'proposals': []};
      Proposals.forEach((proposal) => {
        if (proposal.user.id === userid) {
          response.proposals.push(proposal);
        }
      });
      return of(response);
    }
    createProposal(proposalName, userId ) {
      const response = {'proposal': {}};
      const index = Users.findIndex((element) => {
        if (element.id === userId) {
          return element;
        }
      });
      const newProposal = {
        'id': this.idSeed++,
        'proposalName': proposalName,
        'dateCreated': new Date(),
        'status': 'draft',
        'user':  Users[index],
        requiredForms: ['intake', 'budget']
        };
      Proposals.push(newProposal);
      response.proposal = newProposal;
      return of(response);
      }
      getTimeLine(): Observable<TimeLine> {
        return of<TimeLine>(Timeline);
      }
    }

