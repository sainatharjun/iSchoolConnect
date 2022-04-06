import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Hero/Movie App</h1>
  <hr>
  <a [routerLink]="['']">Home</a> | 
  <a [routerLink]="['heroes']">Browse Heroes</a> | 
  <a [routerLink]="['addhero']">Add Hero</a> | 
  <a [routerLink]="['movies']">Browse Movies</a> | 
  <a [routerLink]="['addmovie']">Add Movie</a> | 
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'step4-routing-featured';
}
