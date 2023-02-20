import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @ViewChild('navbarNav') navbar: any;

  cerrarMenu(): void {
    this.navbar.nativeElement.classList.remove('show');
  }
}
