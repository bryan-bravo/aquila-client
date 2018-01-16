import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
  @ViewChild('fileInput') file;
  showFlag: boolean;
  constructor() { }

  ngOnInit() {
  this.showFlag = false;
  }
  validate() {
    const fileToUpload = this.getFileFromInput(this.file); // this is file
    const fileInput = this.file; // this is view element
     if (!fileToUpload.name.includes('xls')) {
      fileInput.nativeElement.value = '';
      this.showFlag = true;
     }
  }
  upload() {
  }
  getFileFromInput(fileInput) {
    const fi = fileInput.nativeElement;
      if (fi.files && fi.files[0]) {
          const fileToUpload = fi.files[0];
      return fileToUpload;
    }
    return null;
    }
}

