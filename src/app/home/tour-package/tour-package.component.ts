import { Component, OnInit, Input } from '@angular/core';
import { PackageInfoServiceService } from '../package-info-service.service';
import { PackageInfo } from '../package-info';

@Component({
  selector: 'tour-package',
  templateUrl: './tour-package.component.html',
  styleUrls: ['./tour-package.component.css']
})
export class TourPackageComponent implements OnInit {

  @Input() packageInfoList: PackageInfo[];

  constructor() { }

  ngOnInit() {

  }

}