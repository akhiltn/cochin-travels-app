import { Injectable } from "@angular/core";
import { PackageInfo } from "./package-info";
import { HttpClient } from "@angular/common/http";
import { Subject, Observable } from "rxjs";

@Injectable()
export class PackageInfoService {

  private packageInfoList: PackageInfo[];
  //private dataUrl = "https://sheetdb.io/api/v1/99hkiyco5j2az";
  private dataUrl = "assets/jsonData/package-inshort.json";

  constructor(private http: HttpClient) {
   
  }

  getpackageInfo(): Observable<PackageInfo[]> {
    return this.http.get<PackageInfo[]>(this.dataUrl) 
  }
}
