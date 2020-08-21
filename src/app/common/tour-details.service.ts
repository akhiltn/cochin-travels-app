import { Injectable } from '@angular/core';
import { ItenaryInfo } from "./itenary-info";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable()
export class TourDetailsService {

  itenaryArray: ItenaryInfo[];
  private dataUrl = "assets/jsonData/tour-details.json";

  constructor(private http: HttpClient) {  }

  getItenaryInfo(): Observable<ItenaryInfo[]>{
    return this.http.get<ItenaryInfo[]>(this.dataUrl);
  }

  getItenaryInfoById(id: string): Observable<ItenaryInfo[]>{
    return this.getItenaryInfo().pipe(map(data => data.filter(data => data.packageID == id)));
  }
}