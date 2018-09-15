import { AuthLogService } from './../service/auth-log.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent
{
  newUser = {
    username: '',
    password: '',
    password2: ''
  }
  
  user = {
    username: '',
    password: ''
  };

  
  error: String;

  constructor(public authControlLog: AuthLogService, private router: Router) { }


  login ()
  {
    this.authControlLog.login(this.user)
      .subscribe(
      user =>
      {
        this.authControlLog.globalUser = user;
          this.router.navigate(['functions'])
        },
        err => {
          this.error = err;
        }
      )
  }

  signup ()
  {
    this.authControlLog.signup(this.newUser)
      .subscribe(
      user =>
      {
        this.authControlLog.globalUser = user.username;
          this.router.navigate(['functions'])
        },
        err => {
          console.error(err);
          this.error = err;
        }
      )
  }

  isSgnUpDisabled: Boolean = false;
  isLogInDisabled: Boolean = false;
  color: Boolean = false;
  isActiveSignup = true;
  isActiveLogin = true;

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
