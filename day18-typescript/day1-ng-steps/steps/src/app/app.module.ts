import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComp } from './first.component';


// @NgModule({
//   declarations: [
//     AppComponent,FirstComp
//   ],
//   imports: [
//     BrowserModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent,FirstComp]
// })

@NgModule({
  declarations: [
    AppComponent,FirstComp
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
