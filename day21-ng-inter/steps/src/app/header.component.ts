import { Component } from '@angular/core';
import { herodataservice } from './hero.service';

@Component({
  selector: 'app-header',
  template : `
  <ul class=" nav justify-content-center">
    <li class="nav-item" *ngFor="let hero of herodata">
    <a class="nav-link" href="#">{{hero.title}}</a>
    </li>
   <ul>
  `
})
export class HeaderComponent {

  herodata:any;
  appversion:any;
  // hds:herodataservice=new herodataservice()
  constructor(private hds:herodataservice){
    this.herodata=hds.getherodata().subscribe((res)=>{})
  }

}