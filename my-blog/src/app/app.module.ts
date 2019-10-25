import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {RouterModule} from '@angular/router';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {environment} from '../environments/environment';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { SchoolComponent } from './school/school.component';
import { WorkComponent } from './work/work.component';
import { PresentProjectsComponent } from './present-projects/present-projects.component';
import { MyResumeComponent } from './my-resume/my-resume.component';
import { MyTechnologiesComponent } from './my-technologies/my-technologies.component';
import { LearningtechnologiesComponent } from './learningtechnologies/learningtechnologies.component';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    SchoolComponent,
    WorkComponent,
    PresentProjectsComponent,
    MyResumeComponent,
    MyTechnologiesComponent,
    LearningtechnologiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'work', component: WorkComponent},
      {path: 'school', component: SchoolComponent},
      {path: 'projects', component: PresentProjectsComponent},
      {path: 'myResume', component: MyResumeComponent},
      {path: 'myTechnologies', component: MyTechnologiesComponent},
      {path: 'learningTech', component: LearningtechnologiesComponent},
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
