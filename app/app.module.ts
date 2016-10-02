import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NavComponent } from './nav.component';
import { SidebarComponent } from './sidebar.component';
import { ContentComponent } from './content.component';
import { FootComponent } from './foot.component';

import { SkilltreeComponent } from './skilltree.component';

import { routing } from './app.route';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    SidebarComponent,
    ContentComponent,
    FootComponent,
    
    SkilltreeComponent
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }