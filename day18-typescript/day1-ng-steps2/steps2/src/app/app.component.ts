import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Binding 101</h1>
  <hr>
  <h2> {{title}} </h2>
  `

})
export class AppComponent {
  title = 'steps2';
}
