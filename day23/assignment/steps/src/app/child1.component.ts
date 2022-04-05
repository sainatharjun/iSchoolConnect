import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child1',
  template:`<h3>Counter 1: {{ counter }}</h3>


  `
})
export class ChildComponent1 {
  title = 'steps';
  counter:number=1;

  increaseCount1():void{
    this.counter=this.counter+1;
  }
  decreaseCount1():void{
    this.counter=this.counter-1;
  }


}
