import { AuthLogService } from './../service/auth-log.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [AuthLogService]
})
export class LogFormComponent implements OnInit
{
  
  user = {
    username: '',
    password: ''
  };

  error: String;

  constructor(private authControlLog: AuthLogService, private router: Router) { }

  ngOnInit ()
  {
    this.authControlLog.isLoggedIn()
    .subscribe(
      user => {
        return ;
      },
      err => {
        console.error(err)
      }
    )
  }


  login(){
    this.authControlLog.login(this.user)
      .subscribe(
        user => {
          this.router.navigate(['functions'])
        },
        err => {
          this.error = err;
        }
      )
  }

  LogOut() {
    this.authControlLog.logout()
      .subscribe(
        res => this.router.navigate(['home'])
      )
  }

  signup(){
    this.authControlLog.signup(this.user)
      .subscribe(
        user => {
          this.router.navigate(['functions'])
        },
        err => {
          console.error(err);
          this.error = err;
        }
      )
  }
}
