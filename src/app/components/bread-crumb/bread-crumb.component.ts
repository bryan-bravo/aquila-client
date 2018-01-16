import { Component, OnInit, Input } from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.css']
})
export class BreadCrumbComponent implements OnInit {
  @Input('index') index: number;
  @Input('pages') pages: string[];

  constructor() { }

  ngOnInit() {
  }

}
