import { Injectable } from '@angular/core';

let window: any;

@Injectable({
  providedIn: 'root'
})
export class DeviceDetectorService {

  constructor() {
  
   }

   isMobile(): boolean {
    return  window.innerWidth < 768;
  }
}
