import { Component, OnInit, Input } from '@angular/core';
import {ConflictOfInterestOIKPForm} from '../../../models/PreAward/ConflictOfInterestOIKPForm';
@Component({
  selector: 'app-coi',
  templateUrl: './coi.component.html',
  styleUrls: ['./coi.component.css']
})
export class ConflictOfInterestComponent implements OnInit {
  @Input() type:string;// PHS or NONPHS
  coiForm:ConflictOfInterestOIKPForm;
  index:number=0;
  breadCrumbStrings:string[]=['General Info','Disclosure and Certification','Significant Financial Interest'];
  constructor() {
    
   }

  ngOnInit() {
    this.coiForm = new ConflictOfInterestOIKPForm(1,this.type);
    this.coiForm.sponsorPHS = new Map([[true,'']]);  
  }
  updateIndex(value){    
    this.index=value;
   }
  
}
// types
// PIPHS
// PINONPHS
// OIPHS 
// OINONPHS