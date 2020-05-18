import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { PackageInfoService } from "./package-info.service";
import { PackageInfo } from "./package-info";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
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
}
