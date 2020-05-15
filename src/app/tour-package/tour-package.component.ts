import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tour-package',
  templateUrl: './tour-package.component.html',
  styleUrls: ['./tour-package.component.css']
})
export class TourPackageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("Tour init");
  }

}