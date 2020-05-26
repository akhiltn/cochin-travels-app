import { Component, OnInit } from '@angular/core';
import { TourDetailsService } from '../common/tour-details.service';
import { ItenaryInfo } from "./itenary-info";

@Component({
  selector: 'tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css']
})
export class TourDetailsComponent implements OnInit {

  itenaryArray: ItenaryInfo[];
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  constructor(private tourDetailService: TourDetailsService) { }

  ngOnInit() {
    this.tourDetailService.getItenaryInfo().subscribe(
      (data: ItenaryInfo[]) => {
        this.itenaryArray = data;
        console.log('Hello');
        console.log(this.itenaryArray);
        }
      );
    
  }
  

}