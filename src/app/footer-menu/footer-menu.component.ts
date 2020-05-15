import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrls: ['./footer-menu.component.css']
})
export class FooterMenuComponent implements OnInit {

  constructor() { }

  numOfCol;

  ngOnInit() {
    this.numOfCol = (window.innerWidth <= 600) ? 1 : 4;
}

onResize(event) {
  this.numOfCol = (event.target.innerWidth <= 600) ? 1 : 4;
}

}