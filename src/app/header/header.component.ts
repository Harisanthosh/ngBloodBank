import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  leftLogo: string;
  rightLogo: string;
  heading: string;
  constructor() {
    this.leftLogo = 'assets/images/alphaalloy.jpg';
    this.rightLogo = 'assets/images/alphaalloy.jpg';
    this.heading = 'Alloy Blood Bank';
   }

  ngOnInit() {
  }

}
