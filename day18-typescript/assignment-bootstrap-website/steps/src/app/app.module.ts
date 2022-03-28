import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { MainComponent } from './main.component';
import { ProfilesComponent } from './profiles.component';
import { CarouselComponent } from './carousel.component';
import { FeatureComponent } from './feature.component';


@NgModule({
  declarations: [
    AppComponent,HeaderComponent,MainComponent,FooterComponent,ProfilesComponent,CarouselComponent,FeatureComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
