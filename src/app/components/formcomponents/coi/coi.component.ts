import { Component, OnInit, Input } from '@angular/core';
import {ConflictOfInterest} from '../../../models/PreAward/ConflictOfInterest';
@Component({
  selector: 'app-coi',
  templateUrl: './coi.component.html',
  styleUrls: ['./coi.component.css']
})
export class ConflictOfInterestComponent implements OnInit {
  @Input() type: string; // PHS or NONPHS
  coiForm: ConflictOfInterest;
  index: number;
  breadCrumbStrings: string[];
  constructor() {
   }

  ngOnInit() {
    this.index = 0;
    this.breadCrumbStrings = ['General Info', 'Disclosure and Certification', 'Significant Financial Interest'];
    this.coiForm = new ConflictOfInterest(1, this.type);
    // this.coiForm.sponsorPHS = new Map([[true,'']]);
  }
  updateIndex(value) {
    this.index = value;
   }
}
// types
// PIPHS
// PINONPHS
// OIPHS
// OINONPHS
