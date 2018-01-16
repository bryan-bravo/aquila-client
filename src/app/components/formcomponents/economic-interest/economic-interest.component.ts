import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-economic-interest',
  templateUrl: './economic-interest.component.html',
  styleUrls: ['./economic-interest.component.css']
})
export class EconomicInterestComponent implements OnInit {
  index:number;//which page you are on
  breadCrumbStrings: string[] = ['Instructions for Completing Form 700-U','General Information', 'Funding Entity', 'Filer Information', 'Verification'];//page title
  constructor() { }

  ngOnInit() {
    this.index=0;
  }
  // listens for index updates from form footer
  updateIndex(value){
    this.index=value;
   }
}
