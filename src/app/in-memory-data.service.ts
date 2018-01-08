import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 1, username:'Aquaman', password:'bork', firstName: 'Arthur', lastName:'Curry', email:'text@email.com',phone:'22222222'},
      { id: 2, username:'Wonderwoman', password:'bork',  firstName: 'Diana',lastName:'Prince',email:'text@email.com',phone:'22222222' },
      { id: 3, username:'Batman', password:'bork',  firstName: 'Bruce', lastName:'Wayne',email:'text@email.com',phone:'22222222'},
      { id: 4, username:'Superman', password:'bork',  firstName: 'Clark', lastName:'Kent',email:'text@email.com',phone:'22222222'}
    ];
    return {users};
  }
}