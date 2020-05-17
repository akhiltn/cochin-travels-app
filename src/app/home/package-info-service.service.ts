import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PackageInfo } from "./package-info";

@Injectable()
export class PackageInfoServiceService {
  private packageInfoList: PackageInfo[];
  private dataUrl = "assets/standard/standard.json";

  constructor(private http: HttpClient) {
    this.http.get(this.dataUrl).subscribe(
      result => {
        this.packageInfoList = JSON.parse(JSON.stringify(result)) as PackageInfo[];
      },
      error => console.error(error)
    );
  }

  getpackageInfo(): PackageInfo[] {
    return this.packageInfoList;
  }
}
