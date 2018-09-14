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
  
  //CUSTOM TEXT
  values = { text: '' };

  onKey(event: any) { // without type info
    this.values.text = event.target.value;
    this.textLCD();
  }
  textLCD() {
    this.authControlLog.textLCD(this.values).subscribe( user => {
      console.log("Function => textLCD()");
    },
    err => {
      this.error = err;
    })
  }
  
  runningMan(){
    this.authControlLog.runningMan().subscribe( user => {
      console.log("Function => runningMan()");
    },
    err => {
      this.error = err;
    })
  }
  
  servoOn(){
    this.authControlLog.servoON().subscribe( user => {
      console.log("Function => servoOn()");
    },
    err => {
      this.error = err;
    })
  }
  
  servoOff(){
    this.authControlLog.servoOFF().subscribe( user => {
      console.log("Function => servoOff()");
    },
    err => {
      this.error = err;
    })
  }
}
