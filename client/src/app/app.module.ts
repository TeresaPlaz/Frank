import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FrankiHomeComponent } from './franki-home/franki-home.component';
import { FrankiAboutComponent } from './franki-about/franki-about.component';
import { LogFormComponent } from './franki-home/log-form/log-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FrankiHomeComponent,
    FrankiAboutComponent,
    LogFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
