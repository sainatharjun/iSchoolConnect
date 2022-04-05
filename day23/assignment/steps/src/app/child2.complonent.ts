import { Component, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { ChildComponent4 } from './child4.component';

@Component({
  selector: 'app-child2',
  template:`<h3>This is Child 2 and can contain more children</h3>
  <ng-content></ng-content>
  <br>

  `
})
export class ChildComponent2 {
  title = 'steps';
  // @ContentChild(ChildComponent4) c4!:ChildComponent4;
  // ngAfterContentInit(){
  //   this.c4.childNumber=4000
  // }

  @ContentChildren(ChildComponent4) c4!:QueryList<ChildComponent4>;
  ngAfterContentInit(){
    this.c4.toArray().forEach((child)=>{
      child.childNumber=4000
    })
  }
}
