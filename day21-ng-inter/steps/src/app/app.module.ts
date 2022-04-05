import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpRequest } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GridComponent } from './grid.component';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [ AppComponent,HeaderComponent,GridComponent ],
  imports: [ BrowserModule , HttpRequest ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
