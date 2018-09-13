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
}
