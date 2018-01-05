import { Component, OnInit } from '@angular/core';
import {  Router,RouterLink }   from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
@Component({
  selector: 'app-pi-pre-award',
  templateUrl: './pi-pre-award.component.html',
  styleUrls: ['./pi-pre-award.component.css']
})
export class PiPreAwardComponent implements OnInit {
  userName:string;
  userId:string;
  condensedProposals:any[];

  constructor(private router:Router , private authService:AuthenticationService) { }
  ngOnInit() {
    this.condensedProposals=[];
    let x ={
      "name":"bork",
      "id":"borkid",
      "status":"draft",
      "date":"01/01/2017"
    }
    this.condensedProposals.push(x);
  }
  
}
