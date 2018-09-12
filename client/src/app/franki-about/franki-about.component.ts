import { AuthLogService } from './../franki-home/service/auth-log.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-franki-about',
  templateUrl: './franki-about.component.html',
  styleUrls: ['./franki-about.component.css']
})
export class FrankiAboutComponent {

  newUser = {
    username: '',
    password: '',
    password2: ''
  }
  
  constructor(private authControlLog: AuthLogService, private router: Router) { }
  user: String;
  error: String;

  ngOnInit() {
    // this.authControlLog.getUser().subscribe((user) => {
      this.user = this.authControlLog.globalUser;
    // });
  }

  isEditing: Boolean = false;

  editForm(){
    this.isEditing = true;

  }

  editBtn(){
    this.isEditing = false;
    this.authControlLog.editUser(this.newUser).subscribe(
      user => {
        this.router.navigate(['/about'])
      },
      err => {
        this.error = err;
      }
    )
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
