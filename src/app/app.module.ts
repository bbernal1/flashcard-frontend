import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardDetailsModule } from './card-details/card-details.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CardDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
