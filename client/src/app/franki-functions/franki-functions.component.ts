import { routes } from './../app.routing';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthLogService } from './../franki-home/service/auth-log.service';


@Component({
  selector: 'app-franki-functions',
  templateUrl: './franki-functions.component.html',
  styleUrls: ['./franki-functions.component.css']
})
export class FrankiFunctionsComponent implements OnInit {

  constructor(private authControlLog: AuthLogService, private router: Router) { }

  error: String;

  ngOnInit() {
  }

  // toggleBtn ()
  // {
  //   this.authControlLog
  // }

  blinkBtn()
  {
    this.authControlLog.blink().subscribe( user =>
      {
        console.log("Function => blink()");
      },
      err => {
        this.error = err;
      })
  }
  turnOffLED(){
    this.authControlLog.turnOff().subscribe( user => {
      console.log("Function => turnOffLED()");
    },
    err => {
      this.error = err;
    })
  }
  
  turnRedLED(){
    this.authControlLog.redLED().subscribe( user => {
      console.log("Function => turnRedLED()");
    },
    err => {
      this.error = err;
    })
  }
  turnBlueLED(){
    this.authControlLog.blueLED().subscribe( user => {
      console.log("Function => turnBlueLED()");
    },
    err => {
      this.error = err;
    })
  }
  turnGreenLED(){
    this.authControlLog.greenLED().subscribe( user => {
      console.log("Function => turnGreenLED()");
    },
    err => {
      this.error = err;
    })
  }
  
}
