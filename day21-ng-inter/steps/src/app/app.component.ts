import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  template : `
  <h1>Angular</h1>
  <app-header [compdata]="herodata"></app-header>
  <hr>
  <app-grid [compdata]="herodata"></app-grid>
  `
})
export class AppComponent {
  title = 'steps';
  
}