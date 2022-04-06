import { Component, OnInit } from '@angular/core';
import { HeroesService } from './heroes.service';

@Component({
  selector: 'app-heroadd',
  template: `
    <h1>Add A Hero</h1>
    <label for="name">Hero Name</label>
    <input #name id="name" type="text"><br><br>
    <label for="power">Hero Power</label>
    <input #power id="power" type="text"><br><br>
    <label for="intel">Intelligence</label>
    <input #intel id="intel" type="text"><br><br>
    <label>Strength</label>
    <input #strength type="text"><br><br>
    <label>Speed</label>
    <input #speed type="text"><br><br>
    <label>Durability</label>
    <input #durabilty type="text"><br><br>
    <label>Combat</label>
    <input #combat type="text"><br><br>
    <button (click)="showMsg()">Add Hero</button>
    <hr>
    <h2>{{ msg }}</h2>
  `,
  styles: []
})
export class HeroaddComponent implements OnInit {
  msg:string = '';
  constructor(public herodata:HeroesService) { }
  
  ngOnInit() {
  }

  showMsg() {
    this.msg = 'Hero Added.'
  }
}
