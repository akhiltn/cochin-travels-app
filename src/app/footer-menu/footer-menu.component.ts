import { Component, OnInit } from "@angular/core";

@Component({
  selector: "footer-menu",
  templateUrl: "./footer-menu.component.html",
  styleUrls: ["./footer-menu.component.css"]
})
export class FooterMenuComponent implements OnInit {
  breakpoint: number;

  constructor() {}

  ngOnInit() {
    let winSize = window.innerWidth;
    if(winSize > 1000){
      this.breakpoint = 4;
    }
    else if(winSize > 600){
      this.breakpoint = 2;
    }
    else{
      this.breakpoint = 1;
    };
  }

  onResize(event) {
    let winSize = event.target.innerWidth;
    if(winSize > 1200){
      this.breakpoint = 4;
    }
    else if(winSize > 600){
      this.breakpoint = 2;
    }
    else{
      this.breakpoint = 1;
    };
  }
}
