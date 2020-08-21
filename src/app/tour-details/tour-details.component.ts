import { Component, OnInit } from '@angular/core';
import { TourDetailsService } from '../common/tour-details.service';
import { ActivatedRoute } from '@angular/router';
import { ItenaryInfo } from '../common/itenary-info';
import { PackageInfoService } from '../common/package-info.service';
import { PackageInfo } from '../common/package-info';

@Component({
  selector: 'tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css']
})
export class TourDetailsComponent implements OnInit {

  itenaryArray: ItenaryInfo[];
  packageInfo: PackageInfo;
  id: string;
  isIterationReady = false;
  isPackageReady = false;

  constructor(private tourDetailService: TourDetailsService, private route: ActivatedRoute, private packageInfoService: PackageInfoService) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params['id']);
    this.tourDetailService.getItenaryInfoById(this.id).subscribe((res: ItenaryInfo[]) => {
      this.itenaryArray = res;
      this.isIterationReady = this.itenaryArray.length > 0;
    });
    this.packageInfoService.getpackageById(this.id).subscribe((res: PackageInfo) => {
      this.packageInfo = res;
      this.isPackageReady = this.packageInfo.title.length > 0;
    });
  }


}