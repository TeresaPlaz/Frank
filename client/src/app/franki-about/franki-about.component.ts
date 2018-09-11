import { AuthLogService } from './../franki-home/service/auth-log.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-franki-about',
  templateUrl: './franki-about.component.html',
  styleUrls: ['./franki-about.component.css']
})
export class FrankiAboutComponent {

  
  constructor(private authControlLog: AuthLogService, private router: Router) { }
  user: String = this.authControlLog.globalUser;
  error: String;

  ngOnInit() {
    // this.authControlLog.getUser().subscribe((user) => {
      this.user = this.authControlLog.globalUser;
    // });
  }
  
  deleteBtn(){
    this.authControlLog.removeUser().subscribe(
      user => {
        this.router.navigate(['/'])
      },
      err => {
        this.error = err;
      }
    )
  }

}
