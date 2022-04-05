import { Component } from '@angular/core';

@Component({
  selector: 'app-child3',
  template:`<h3>Counter 3: {{ counter }}</h3>
`
})
export class ChildComponent3 {
  title = 'steps';
  counter:number=3;

  increaseCount3():void{
    this.counter=this.counter+1;
  }
  decreaseCount3():void{
    this.counter=this.counter-1;
  }
}
