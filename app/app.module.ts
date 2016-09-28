import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { IndexComponent } from './index.component';
import { NavComponent } from './nav.component';

import { routing } from './app.route';

export const firebaseConfig = {
    apiKey: "AIzaSyAuo_7InSXgk-D3D61pYmwl7jaoFJp-4MM",
    authDomain: "homepage-5c349.firebaseapp.com",
    databaseURL: "https://homepage-5c349.firebaseio.com",
    storageBucket: "homepage-5c349.appspot.com",
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routing
  ],
  declarations: [
    AppComponent,
    IndexComponent,
    NavComponent
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }