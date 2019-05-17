import { Component,OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.Service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  isAuth: boolean = false;
  lastUpdate = new Promise((resolve, reject)=> {
    const date = new Date();
    setTimeout( 
      ()=> 
      {
      resolve(date);
    },2000
    );
  });

  appareils: any[]

  
  constructor(private appareilService: AppareilService) {
    setTimeout( () => {
      this.isAuth = true;
    },4000
    )
    
    
  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils
  }

  onAllumer() {
    this.appareilService.switchOnAll();
    console.log("On allume tout");
  }
  onEteindre() {
    if(confirm('Etes vous sur de vouloir éteindre tout vos appareils ?')) {
    this.appareilService.switchOffAll();
    } else {
      return null;
    }
  }
}
