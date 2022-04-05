import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent1 } from './child1.component';
import { ChildComponent2 } from './child2.complonent';
import { ChildComponent3 } from './child3.component';
import { ChildComponent4 } from './child4.component';

@NgModule({
  declarations: [
    AppComponent,ChildComponent1,ChildComponent2,ChildComponent3,ChildComponent4
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
