import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template : `
  <ul>
    <li>Title is : {{ title | ischool : 'hi' }}</li>
    <li>User Name is : {{ username }}</li>
    <li>User Age is : {{ userage }}</li>
  </ul>
  `
})
export class AppComponent {
  title = 'iSchool';
  username = "Batman";
  userage = 18;

  increaseAge(){
    this.userage = this.userage + 1;
  }
}
