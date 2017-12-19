import { Component, OnInit } from '@angular/core';
import {  Router }   from '@angular/router';


@Component({
  selector: 'app-pihome-page',
  templateUrl: './pihome-page.component.html',
  styleUrls: ['./pihome-page.component.css']
})
export class PiHomePageComponent implements OnInit {
  name:string;
 
  constructor(private router:Router) { }

  ngOnInit() {
    this.name='Bryan';
  }
  navigate(location){
    this.router.navigate([location]);
  }
}
 