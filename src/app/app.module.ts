import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingPageComponentComponent } from './components/landing-page-component/landing-page-component.component';
import { NavbarComponent } from './components/navbar-component/navbar.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { ExperienceComponentComponent } from './components/experience-component/experience-component.component';
import { InicioComponentComponent } from './components/inicio-component/inicio-component.component';
import { SectionComponentComponent } from './components/section-component/section-component.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
 


const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponentComponent },
  { path: 'experiencia', component: ExperienceComponentComponent },
  { path: 'sobre-mi', component: SobreMiComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponentComponent,
    NavbarComponent,
    FooterComponentComponent,
    ExperienceComponentComponent,
    InicioComponentComponent,
    SectionComponentComponent,
    SobreMiComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
