import { Injectable } from '@angular/core';
import {User} from '../models/User';

@Injectable()
export class AuthenticationService {
users:User[];
  constructor() {
    this.users=[
    {
      'id':0,
      'userName':'Donkey Cupcake',
      'firstName':'Bryan',
      'lastName':'Bravo',
      'phone':6262627051,
      'email':'yadaddy@memes.com',
    },
    {
      'id':1,
      'userName':'Ronald McDonald',
      'firstName':'Ronald',
      'lastName':'Sama',
      'phone':6262627051,
      'email':'obesity@lawsuit.com',
    },
    {
      'id':2,
      'userName':'My Waifu',
      'firstName':'Ada',
      'lastName':'Wong',
      'phone':1238008,
      'email':'adawong@residentevil4.com',
    },{
      'id':3,
      'userName':'',
      'firstName':'',
      'lastName':'',
      'phone':0,
      'email':'doggo@dogemail.com',
    }
    ];   
   }
  authenticate(username,password): Object{
    //check SAML  for email and password: either are incorrect
    //if passed go to our db : check for their email there 
    //if user not in db by email respond with boolean:false and user:null
    //if in db, respond with boolean:true,user:user,list of condensed projects 
    let response ={
    };  
    this.users.forEach((user)=>{
       if(user.email==username){}  
      });
      return response;
    //if first time user redirect to info fill out
    //if not go to pi home page  
  }

}

