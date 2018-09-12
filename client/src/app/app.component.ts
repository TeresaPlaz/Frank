import { Component, OnChanges } from '@angular/core';
import { AuthLogService } from './franki-home/service/auth-log.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
} )
  
export class AppComponent implements OnChanges{
  constructor(private authControlLog: AuthLogService,  private router: Router) {}

  inverted: Boolean;
  user: String;

  logout ()
  {
    this.authControlLog.logout().subscribe(
      user => {
        this.authControlLog.globalUser = '';
        this.router.navigate(['/'])
      },
      err => {
        console.error(err);
      }
    )
  }
  ngOnInit() {
    
      // this.authControlLog.getUser().subscribe(user => { 
      //   this.authControlLog.globalUser = user.username ;
        this.user = this.authControlLog.globalUser;
      //   return user; 
      // }, err => { console.error(err) });
  }

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.authControlLog.getUser().subscribe(user => { 
      this.authControlLog.globalUser = user.username ;
      this.user = this.authControlLog.globalUser;
      return user; 
    }, err => { console.error(err) });
  }
  
  ngDoCheck() {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    if(this.router.url === '/'){
      this.inverted = true;
    }
    else{
      this.inverted = false;
    }
  }
  

} 