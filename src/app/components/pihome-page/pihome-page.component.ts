import { Component, OnInit } from '@angular/core';
import {MenuItem,Header} from 'primeng/primeng';
import {ProjectInfo} from './ProjectInfo';
@Component({
  selector: 'app-pihome-page',
  templateUrl: './pihome-page.component.html',
  styleUrls: ['./pihome-page.component.css']
})
export class PiHomePageComponent implements OnInit {
  name:string;
  items: MenuItem[];
  projects: ProjectInfo[];
  constructor() { }

  ngOnInit() {
    this.populateMenuBar();
  }
  populateMenuBar(){
    this.name ='Bryan';
    this.items=[ 
      {
       label:'Welcome '+this.name+',' 
      },
      {
        label: 'Settings',
        icon: 'fa-gear',
        items: []
      }
    ];
  }

}
 