import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-footer',
  templateUrl: './form-footer.component.html',
  styleUrls: ['./form-footer.component.css']
})
export class FormFooterComponent implements OnInit {
  @Input('index') _index:number;
  @Input('page-length') pageLength:number;
  @Output() newIndex = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  changeIndex(direction){    
    if(direction=='left')
      this._index=this._index-1;

    if(direction=='right')
      this._index=this._index+1;
    this.newIndex.emit(this._index);
    }

}
