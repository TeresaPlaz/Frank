import { AuthLogService } from './../service/auth-log.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [AuthLogService]
})
export class LogFormComponent implements OnInit {

  constructor(private authControlLog: AuthLogService) { }

  ngOnInit() {
  }

}
