import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { UserService } from './services/user.services';
import { UserAddComp } from './adduser.component';
import { UsersListComp } from './userslist.component';


@NgModule({
  declarations: [
    AppComponent, UserAddComp, UsersListComp
  ],
  imports: [
    BrowserModule,FormsModule, AngularFireModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [ UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
