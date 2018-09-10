import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthLogService } from './franki-home/service/auth-log.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
} )
  
export class AppComponent implements DoCheck {
  constructor(private authControlLog: AuthLogService,  private router: Router) {}

  isLoggedIn2 = this.authControlLog.isLoggedIn().subscribe(user => { return ; }, err => { console.error(err) });
  inverted: Boolean;

  logout ()
  {
    this.authControlLog.logout()
    .subscribe(
      res => this.router.navigate(['/'])
    )
  }
  ngDoCheck() {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    // console.log(this.router.url);
    if(this.router.url === '/'){
      this.inverted = true;
    }
    else{
      this.inverted = false;
    }
  }
  

}