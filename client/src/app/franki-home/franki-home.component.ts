import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-franki-home',
  templateUrl: './franki-home.component.html',
  styleUrls: ['./franki-home.component.css']
})
export class FrankiHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const video = document.getElementsByTagName("video")[0];

  // video.width = Math.floor(window.innerWidth);
  // video.style.width = video.width+"px";
  video.height = Math.floor(window.innerHeight) * 1.4;
  video.style.height = video.height+"px";
  }

  // video = document.getElementsByTagName("video")[0];

  // video.width = Math.floor(window.innerWidth);
  // video.style.width = video.width+"px";

}
