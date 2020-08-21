import { Component, OnInit, ViewChild, ViewChildren } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { PackageInfoService } from "../common/package-info.service";
import { PackageInfo } from "../common/package-info";
import { MatTabGroup, MatTab } from "@angular/material/tabs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  tab_num = 0;
  selected = 0;
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

  packageInfoList: PackageInfo[];
  standardPackageInfoList: PackageInfo[];
  honeymoonPackageInfoList: PackageInfo[];
  pilgrimPackageInfoList: PackageInfo[];
  pkgMap = new Map<String, PackageInfo[]>();

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.packageInfoList = this.route.snapshot.data["packageInfoList"];
    if (this.packageInfoList) {
      this.setPkgMap();
    } else {
      console.error("No Data " + this.packageInfoList);
    }
    this.tab_num = this.packageInfoList.length;
  }

  setPkgMap(){
    this.packageInfoList.forEach((pkg: PackageInfo) => {
      if(this.pkgMap.get(pkg.packageType)){
          this.pkgMap.get(pkg.packageType).push(pkg);
      }
      else {
        this.pkgMap.set(pkg.packageType,new Array<PackageInfo>(pkg));
      }
    });
  }

  swipe(eventType){
    if(eventType === this.SWIPE_ACTION.RIGHT && this.selected > 0){
      this.selected--;
    }
    else if(eventType === this.SWIPE_ACTION.LEFT && this.selected+1 < this.tab_num ){
      this.selected++;
    }
  }
}
