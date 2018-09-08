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

  isSgnUpDisabled: Boolean = false;
  isLogInDisabled: Boolean = false;
  color: Boolean = false;
  isActiveSignup = true;
  isActiveLogin = true;
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

  toggleInput(INorUP) {
    if(INorUP === "up"){
      this.isSgnUpDisabled = true;
      this.isLogInDisabled = false;
      this.isActiveSignup = false;
      this.isActiveLogin = true;
    }else if(INorUP === "in"){
      this.isSgnUpDisabled = false;
      this.isLogInDisabled = true;
      this.isActiveSignup = true;
      this.isActiveLogin = false;
    }

  }
  changeBorder(){
  this.color = !this.color; 
  } 
  
}
