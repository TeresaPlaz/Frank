import { AuthLogService } from './../franki-home/service/auth-log.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-franki-about',
  templateUrl: './franki-about.component.html',
  styleUrls: ['./franki-about.component.css']
})
export class FrankiAboutComponent implements OnInit {

  user: String;
  constructor(private authControlLog: AuthLogService) { }

  ngOnInit() {
    this.authControlLog.getUser().subscribe((user) => {
      this.user = user;
    });
  }

}
