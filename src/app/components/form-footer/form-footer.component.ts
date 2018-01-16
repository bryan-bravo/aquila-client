import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-footer',
  templateUrl: './form-footer.component.html',
  styleUrls: ['./form-footer.component.css']
})
export class FormFooterComponent implements OnInit {
  @Input('index') index: number;
  @Input('length') length: number; // pages length
  @Output() newIndex = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  changeIndex(direction) {
    if (direction === 'left') {
      this.index = this.index - 1;
    }

    if (direction === 'right') {
      this.index = this.index + 1;
    }
    this.newIndex.emit(this.index);
  }

}
