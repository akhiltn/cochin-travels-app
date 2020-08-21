import { Injectable } from "@angular/core";
import { PackageInfo } from "./package-info";
import { HttpClient } from "@angular/common/http";
import { Subject, Observable } from "rxjs";
import { filter, map } from "rxjs/operators";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PackageInfoService {

  private packageInfoList: PackageInfo[];
  private dataUrl = environment.UTIL_API+"/sheets/getSheetByID/Sheet1";
  //private dataUrl = "assets/jsonData/package-inshort.json";

  constructor(private http: HttpClient) {
   
  }

  getpackageInfo(): Observable<PackageInfo[]> {
    return this.http.get<PackageInfo[]>(this.dataUrl) 
  }

  getpackageById(id: string): Observable<PackageInfo> {
    return this.getpackageInfo()
    .pipe(map(data => data.find(x => x.packageID == id)));
  }
}
