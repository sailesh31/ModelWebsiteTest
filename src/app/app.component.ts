import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'myApp';
  loaderPersonInfo : any;
  interval : any;

  startTime() {
    this.interval = setTimeout(() => {this.loaderPersonInfo = false;
    }, 5000);
    
  }
 

  stopTime() {
    clearInterval(this.interval);
  }

  ngOnInit(){
    this.loaderPersonInfo = true;
    this.startTime();
  }
}
