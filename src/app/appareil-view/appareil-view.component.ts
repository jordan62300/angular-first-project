import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.Service';
import { AuthService } from '../services/auth.Services'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  isAuth: boolean = false;
  appareils: any[]
  id: number;
  appareilSubscription: Subscription;

  lastUpdate = new Promise((resolve, reject)=> {
    const date = new Date();
    setTimeout( 
      ()=> 
      {
      resolve(date);
    },2000
    );
  });


  constructor(private appareilService: AppareilService,private authService: AuthService) { }

  ngOnInit() {
    this.appareilSubscription = this.appareilService.appareilsSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
    this.isAuth = this.authService.isAuth
  }
 
  onAllumer() {
    this.appareilService.switchOnAll()
  }

  onEteindre() {
    if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
  }

  onSave() {
    this.appareilService.saveAppareilsToServer();
  }

  onFetch() {
    this.appareilService.getAppareilsFromServer();
  }

}
