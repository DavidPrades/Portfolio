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
      apiKey: "AIzaSyCdSNwfBOjrD8ANTcbHS6ahx96Uk3nUQrM",
      authDomain: "portfolio-44eba.firebaseapp.com",
      projectId: "portfolio-44eba",
      storageBucket: "portfolio-44eba.appspot.com",
      messagingSenderId: "366226355036",
      appId: "1:366226355036:web:d98535acf16f219d954799"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
  }
  title = 'PortfolioDavidPrades';

}


