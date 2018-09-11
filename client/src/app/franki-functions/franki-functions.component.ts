import { Component, OnInit } from '@angular/core';
import { AuthLogService } from './../franki-home/service/auth-log.service';


@Component({
  selector: 'app-franki-functions',
  templateUrl: './franki-functions.component.html',
  styleUrls: ['./franki-functions.component.css']
})
export class FrankiFunctionsComponent implements OnInit {

  constructor(private authControlLog: AuthLogService) { }

  ngOnInit() {
  }

  blinkBtn()
  {
    this.authControlLog.blink();
  }
}
