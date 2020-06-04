import { Injectable } from "@angular/core";
import { PackageInfo } from "./package-info";
import { HttpClient } from "@angular/common/http";
import { Subject, Observable } from "rxjs";
import { filter } from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class PackageInfoService {

  private packageInfoList: PackageInfo[];
  //private dataUrl = "https://sheetdb.io/api/v1/99hkiyco5j2az";
  private dataUrl = "assets/jsonData/package-inshort.json";

  constructor(private http: HttpClient) {
   
  }

  getpackageInfo(): Observable<PackageInfo[]> {
    return this.http.get<PackageInfo[]>(this.dataUrl) 
  }

  async getpackageById(id: string): Promise<PackageInfo> {
    console.log("start "+id);
    await this.getpackageInfo().toPromise().then(res => this.packageInfoList = res);
    console.log("check1"+JSON.stringify(this.packageInfoList.find(data => data.packageID == id)));
    return this.packageInfoList.find(data => data.packageID == id);
  }
}
