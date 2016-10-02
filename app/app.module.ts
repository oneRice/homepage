// Angular Module
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

// Structrue Module
import { AppComponent } from './app.component';
import { NavComponent } from './nav.component';
import { SidebarComponent } from './sidebar.component';
import { ContentComponent } from './content.component';
import { FootComponent } from './foot.component';

// Content Module
import { HomeComponent } from './home.component';
import { SkilltreeComponent } from './skilltree.component';
import { ResumeComponent } from './resume.component';

import { routing } from './app.route';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    NavComponent,
    SidebarComponent,
    ContentComponent,
    FootComponent,

    HomeComponent,
    SkilltreeComponent,
    ResumeComponent
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }