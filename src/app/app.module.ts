//core angular
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

//ngPrime 
import {ButtonModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import {MenubarModule,MenuItem} from 'primeng/primeng';
import {DataListModule} from 'primeng/primeng';
import {Header} from 'primeng/primeng';
import {MessagesModule} from 'primeng/primeng';
import {MessageModule} from 'primeng/primeng';
import {InputSwitchModule} from 'primeng/primeng';

//generated components
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {RouterModule,Routes} from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PiHomePageComponent } from './components/pihome-page/pihome-page.component';
import { LoginComponent } from './components/login/login.component';
import { NewProposalComponent } from './components/new-proposal/new-proposal.component';

//services
import{AuthenticationService} from './services/authentication.service';
const AppRoutes: Routes =[
    {path:'', component:LandingPageComponent},  
    {path:'login', component:LoginComponent},  
    {path:'home', component:PiHomePageComponent},//will have can activate thing   
    {path:'newproposal', component:NewProposalComponent},//will have can activate thing   
    
];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LandingPageComponent,
    LoginComponent,
    PiHomePageComponent,
    NewProposalComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes),
    ButtonModule,
    InputTextModule,
    MenubarModule,
    DataListModule,
    MessagesModule,
    MessageModule,
    InputSwitchModule
  
    
  ],
  providers: [AuthenticationService],   
  bootstrap: [AppComponent]
})
export class AppModule { }
