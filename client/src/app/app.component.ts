import { Component } from '@angular/core';
import { AuthLogService } from './franki-home/service/auth-log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  /**
   *
   */
  constructor(private authControlLog: AuthLogService) { }
  title = 'client';
}
