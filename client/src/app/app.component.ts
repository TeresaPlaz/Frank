import { Component } from '@angular/core';
import { AuthLogService } from './franki-home/service/auth-log.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
} )
  
export class AppComponent {
  constructor(public authControlLog: AuthLogService,  private router: Router) {}

  NavID: Boolean;
  NavID2: Boolean;

  logout ()
  {
    this.authControlLog.logout().subscribe(
      user =>
      {
        this.authControlLog.globalUser = '';
        this.router.navigate( [ '/' ] );
      },
      err => {
        console.error(err);
      }
    )
  }
  
  ngDoCheck() {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    if(this.router.url === '/'){
      this.NavID = true;
      this.NavID2 = false;
    }
    else if (this.router.url === '/about') 
    {
      this.NavID2 = true;
      this.NavID = false;
    }
    else {
      this.NavID2 = false
      this.NavID = false;
    }
  }
  

} 