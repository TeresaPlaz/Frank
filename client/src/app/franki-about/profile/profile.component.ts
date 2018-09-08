import { AuthLogService } from './../../franki-home/service/auth-log.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: String;
  constructor(private authControlLog: AuthLogService) { }

  ngOnInit() {
    this.authControlLog.getUser().subscribe((user) => {
      this.user = user;
    });
  }

}
