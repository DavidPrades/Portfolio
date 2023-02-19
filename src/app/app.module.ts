import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingPageComponentComponent } from './components/landing-page-component/landing-page-component.component';
import { NavbarComponent } from './components/navbar-component/navbar.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponentComponent,
    NavbarComponent,
    FooterComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
