import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { routes } from './app.routing';
import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { AuthLogService } from './franki-home/service/auth-log.service';
import { FrankiHomeComponent } from './franki-home/franki-home.component';
import { FrankiAboutComponent } from './franki-about/franki-about.component';
import { LogFormComponent } from './franki-home/log-form/log-form.component';
import { FrankiFunctionsComponent } from './franki-functions/franki-functions.component';
import { ProfileComponent } from './franki-about/profile/profile.component';
import { InstructionsComponent } from './franki-about/instructions/instructions.component';

@NgModule({
  declarations: [
    AppComponent,
    FrankiHomeComponent,
    FrankiAboutComponent,
    LogFormComponent,
    FrankiFunctionsComponent,
    ProfileComponent,
    InstructionsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule
  ],
  providers: [AuthLogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
