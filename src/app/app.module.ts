import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingPageComponentComponent } from './components/landing-page-component/landing-page-component.component';
import { NavbarComponent } from './components/navbar-component/navbar.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { WorkspaceComponent } from './components/workspace-component/workspace-component.component';
import { InicioComponentComponent } from './components/inicio-component/inicio-component.component';
import { SobreMiComponentComponent } from './components/sobre-mi-component/sobre-mi-component.component';
import { ContactoComponent } from './components/contacto/contacto.component';
 
const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponentComponent },
  { path: 'workspace', component: WorkspaceComponent },
  { path: 'about', component: SobreMiComponentComponent },
  { path: 'contacto', component: ContactoComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponentComponent,
    NavbarComponent,
    FooterComponentComponent,
    WorkspaceComponent,
    InicioComponentComponent,
    SobreMiComponentComponent,
    ContactoComponent,
   
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
