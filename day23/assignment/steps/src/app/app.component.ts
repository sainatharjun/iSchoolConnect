import { AfterContentInit, Component, ContentChild, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChildComponent1 } from './child1.component';
import { ChildComponent2 } from './child2.complonent';
import { ChildComponent3 } from './child3.component';
import { ChildComponent4 } from './child4.component';

@Component({
  selector: 'app-root',
  template:`<h1>Assignment</h1>
  <hr>
  <app-child1>
  </app-child1>
  <app-child1>
  </app-child1>
  <button (click)="increaseChildCount1()"> Counter1 + </button>
  <button (click)="decreaseChildCount1()"> Counter1 - </button>
  <hr>
  <app-child2>
  <app-child4></app-child4>
  <app-child4></app-child4>
  </app-child2>

  <hr>
  <app-child3 #child3>
  </app-child3>
  <button (click)="increaseChildCount3()"> Counter3 + </button>
  <button (click)="decreaseChildCount3()"> Counter3 - </button>
  `
})
export class AppComponent {
  title = 'steps';
  // @ViewChild(ChildComponent1) c1:ChildComponent1 = new ChildComponent1;
  @ViewChild(ChildComponent2) c2:ChildComponent2 = new ChildComponent2;
  @ViewChild(ChildComponent3) c3:ChildComponent3 = new ChildComponent3;

  @ViewChildren(ChildComponent1) children1 !:QueryList<ChildComponent1>

  // increaseChildCount1():void{
  // this.c1.increaseCount1();
  // }
  increaseChildCount1():void{
    this.children1.toArray().forEach((child)=>{
      child.increaseCount1();
    });
    }
  // decreaseChildCount1():void{
  // this.c1.decreaseCount1();
    
  // }
  decreaseChildCount1():void{
    this.children1.toArray().forEach((child)=>{
      child.decreaseCount1();
    });
    }
  
  increaseChildCount3():void{
    this.c3.increaseCount3();
  }
  decreaseChildCount3():void{
    this.c3.decreaseCount3();
  }

}
