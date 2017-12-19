import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pi-pre-award',
  templateUrl: './pi-pre-award.component.html',
  styleUrls: ['./pi-pre-award.component.css']
})
export class PiPreAwardComponent implements OnInit {
  userName:string;
  userId:string;
  condensedProposals:any[];

  constructor() { }

  ngOnInit() {}

}
