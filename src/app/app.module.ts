import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudyListComponent } from './pages/study-list/study-list.component';
import { StudyContactComponent } from './pages/study-contact/study-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    StudyListComponent,
    StudyContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
