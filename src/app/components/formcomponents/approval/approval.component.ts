import { Component, OnInit } from '@angular/core';
import {ApprovalForm} from '../../../models/PreAward/ApprovalForm';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})
export class ApprovalComponent implements OnInit {
    approvalForm: ApprovalForm;
    index: number;
    breadCrumbStrings: string[] = ['General Information', 'Project Information', 'Terms and Amounts Requested', 'Certifications/Special Requirements', 'Required Review and Approvals', 'Cost Sharing Information', 'Proposal Workload']

  constructor() { }

  ngOnInit() {
    this.index = 0;
    this.approvalForm = new ApprovalForm('1');
  }

  updateIndex(value) {
    this.index = value;
  }
  setProgressBar(percentage) {
    const formattedWidth = percentage + '%';
    return{
        'height':'10px',
        'width':formattedWidth,
        'background-color':'rgb(46, 236, 29)'
    };
  }
}
