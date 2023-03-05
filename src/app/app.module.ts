import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountComponent } from './counter-component';
import { ObjectComponent } from './object-counter.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountComponent,
    ObjectComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
