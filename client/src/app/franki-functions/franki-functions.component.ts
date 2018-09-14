import { routes } from './../app.routing';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthLogService } from './../franki-home/service/auth-log.service';


@Component({
  selector: 'app-franki-functions',
  templateUrl: './franki-functions.component.html',
  styleUrls: ['./franki-functions.component.css']
})
export class FrankiFunctionsComponent {

  constructor(private authControlLog: AuthLogService, private router: Router) { }

  error: String;
  toggle: Boolean = false;

  toggleBtn ()
  {
    this.toggle = !this.toggle;
    if ( this.toggle )
    {
      this.authControlLog.blink().subscribe( user => {
        console.log("Function => Turn ON LED");
      },
      err => {
        this.error = err;
      })
    }
    else if ( !this.toggle )
    {
      this.authControlLog.turnOff().subscribe( user => {
        console.log("Function => Turn OFF LED");
      },
      err => {
        this.error = err;
      })
    }
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
