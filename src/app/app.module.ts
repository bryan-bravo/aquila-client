//core angular
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//ngPrime 
import {ButtonModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import {MenubarModule,MenuItem} from 'primeng/primeng';
import {DataListModule} from 'primeng/primeng';
import {Header} from 'primeng/primeng';
import {MessagesModule} from 'primeng/primeng';
import {MessageModule} from 'primeng/primeng';
import {InputSwitchModule} from 'primeng/primeng';
import {OverlayPanelModule} from 'primeng/primeng';

//generated components
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {RouterModule,Routes} from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PiHomePageComponent } from './components/pihome-page/pihome-page.component';
import { LoginComponent } from './components/login/login.component';
import { EditProposalComponent } from './components/edit-proposal/edit-proposal.component';
import { IntakeComponent } from './components/formcomponents/intake/intake.component';

//services
import{AuthenticationService} from './services/authentication.service';
const AppRoutes: Routes =[
    {path:'', component:LandingPageComponent},  
    {path:'login', component:LoginComponent},  
    {path:'home', component:PiHomePageComponent},//will have can activate thing   
    {path:'editproposal/:id',component:EditProposalComponent,
      children:[
        {path:'Intake', component:IntakeComponent},  
        
      ]
    }
];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LandingPageComponent,
    LoginComponent,
    PiHomePageComponent,
    EditProposalComponent,
    IntakeComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes),
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    MenubarModule,
    DataListModule,
    MessagesModule,
    MessageModule,
    InputSwitchModule,
    OverlayPanelModule
  
    
  ],
  providers: [AuthenticationService],   
  bootstrap: [AppComponent]
})
export class AppModule { }
