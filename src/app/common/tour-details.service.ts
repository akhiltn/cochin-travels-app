import { Injectable } from '@angular/core';
import { ItenaryInfo } from "./itenary-info";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable()
export class TourDetailsService {

  itenaryArray: ItenaryInfo[];
  private dataUrl = "assets/jsonData/tour-details.json";

  constructor(private http: HttpClient) {  }

  getItenaryInfo(): Observable<ItenaryInfo[]>{
    return this.http.get<ItenaryInfo[]>(this.dataUrl);
  }

  async getItenaryInfoById(id: string): Promise<ItenaryInfo[]>{
    await this.getItenaryInfo().toPromise().then(res => this.itenaryArray = res);   
    return this.itenaryArray.filter(data => data.packageID == id);
  }
}