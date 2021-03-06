import { Component} from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-countdowntimer',
  templateUrl: './countdowntimer.component.html',
  styleUrls: ['./countdowntimer.component.css']
})
export class CountdowntimerComponent  {

  title = 'CountDown';
  date = "may 06 2021";
  dateTime: Date = new Date("may 06 2021");
  countDownDate = new Date(this.dateTime).getTime();

  demo: any;
  day: any;
  hrs: any;
  mins: any;
  secs: any;
  now: any;
  dt1: any;
  x = setInterval(() => {
    let now = new Date().getTime();
    let distance = new Date(this.dateTime).getTime() - now;
    this.day = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.secs = Math.floor((distance % (1000 * 60)) / (1000));
  });

  constructor() {}
}
