import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ISchoolUserService } from './user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddUserComponent } from './adduser.component'
import { DataComponent } from './data.component';
import { EditUserComponent } from './editUser.component'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,AddUserComponent,DataComponent,EditUserComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: DataComponent },
      { path: 'add', component: AddUserComponent },
      { path: 'edit/:uid', component: EditUserComponent },
    ]),
  ],
  providers: [ISchoolUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }