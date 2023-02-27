import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const firebaseConfig = {
      apiKey: "AIzaSyC1DDTIU4Eca0YngODPv9QEZTuXbW4Dxzk",
      authDomain: "portfolio-e421f.firebaseapp.com",
      projectId: "portfolio-e421f",
      storageBucket: "portfolio-e421f.appspot.com",
      messagingSenderId: "681485638837",
      appId: "1:681485638837:web:64ebb31b7cab496a90f2fc",
      measurementId: "G-YLRTH10PLJ"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  }
  title = 'PortfolioDavidPrades';
   
}


