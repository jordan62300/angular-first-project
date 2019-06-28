import { Component,OnInit,OnDestroy } from '@angular/core';
import { AppareilService } from './services/appareil.Service';
import { Observable, Subject, Subscription } from 'rxjs';
import { interval } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit,OnDestroy{
  
  secondes: number;
  counterSubscription: Subscription;

  ngOnInit() {
    const counter = interval(1000);

   this.counterSubscription = counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log('an error occured ! : ' + error)
      },
      () => {
        console.log('Observable complete!');
      }
    )

  }



  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }


}
  
