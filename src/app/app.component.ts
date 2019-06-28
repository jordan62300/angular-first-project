import { Component,OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.Service';
import { Observable, Subject } from 'rxjs';
import { interval } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit{
  
  secondes: number;

  ngOnInit() {
    const counter = interval(1000);

    counter.subscribe(
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



 

}
