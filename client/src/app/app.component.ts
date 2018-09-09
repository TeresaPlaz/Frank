import { Component, OnInit } from '@angular/core';
import { AuthLogService } from './franki-home/service/auth-log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
} )
  
export class AppComponent implements OnInit {
    constructor(private authControlLog: AuthLogService) {}

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.

    }
     isLoggedIn2 = this.authControlLog.isLoggedIn().subscribe(user => { return ; }, err => { console.error(err) });
}