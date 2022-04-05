import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child4',
  template:`<h3>This is Child {{ childNumber }}</h3>


  `
})
export class ChildComponent4 {
  title = 'steps';
  childNumber:number=4;
  }
