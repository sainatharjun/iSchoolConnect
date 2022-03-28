import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
  <main>
  <app-carousel></app-carousel>
  <div class="container marketing">
  <app-profiles></app-profiles>
  <app-feature></app-feature>          
  </div>
  </main>
    `
})
export class MainComponent {
  title = 'steps';
}
