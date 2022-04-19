import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template : `
      <div class="container">
        <h1>User Application</h1>
        <hr>
        <app-userlist></app-userlist>
        <app-adduser></app-adduser>
      </div>
    `
})
export class AppComponent {
  title = 'steps';
}
