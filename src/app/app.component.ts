import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  isAuth: boolean = false;

  appareils = [
    {
    name: 'Machine a laver',
    status: 'éteint'
    },
    {
    name: 'Frigo',
    status: 'allumé'
    },
    {
    name: 'Ordinateur',
    status: 'éteint'
    }
  ]

  
  constructor() {
    setTimeout( () => {
      this.isAuth = true;
    },4000
    )

    
  }
      onAllumer() {
        console.log("On allume tout");
      }
}
