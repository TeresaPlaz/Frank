import { Component, OnInit } from '@angular/core';
import { AuthLogService } from './../franki-home/service/auth-log.service';

@Component({
  selector: 'app-franki-about',
  templateUrl: './franki-about.component.html',
  styleUrls: ['./franki-about.component.css']
})
export class FrankiAboutComponent implements OnInit {

  constructor(private authControlLog: AuthLogService) { }

  ngOnInit() {
  }

}
