import { AuthLogService } from './../franki-home/service/auth-log.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-franki-about',
  templateUrl: './franki-about.component.html',
  styleUrls: ['./franki-about.component.css']
})
export class FrankiAboutComponent {

  newInfo = {
    username: '',
    password: '',
    password2: ''
  }
  
  constructor(private authControlLog: AuthLogService, private router: Router) { }
  error: String;

  ngOnInit() {  }

  isEditing: Boolean = false;

  editForm(){
    this.isEditing = true;

  }

  editBtn ()
  {
    this.authControlLog.globalUser = this.newInfo.username;
    this.isEditing = false;
    this.authControlLog.editUser(this.newInfo).subscribe(
      user =>
      {
        this.router.navigate(['/about'])
      },
      err => {
        this.error = err;
      }
    )
  }

  deleteBtn(){
    this.authControlLog.removeUser().subscribe(
      user =>
      {
        this.authControlLog.globalUser = '';
        this.router.navigate(['/'])
      },
      err => {
        this.error = err;
      }
    )
  }

}
