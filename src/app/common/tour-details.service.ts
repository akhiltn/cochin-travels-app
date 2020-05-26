import { Injectable } from '@angular/core';
import { ItenaryInfo } from "./itenary-info";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable()
export class TourDetailsService {

  private itenaryList: ItenaryInfo[];
  private dataUrl = "assets/jsonData/tour-details.json";

  constructor(private http: HttpClient) {
   
  }

  getItenaryInfo(): Observable<ItenaryInfo[]>{
    return this.http.get<ItenaryInfo[]>(this.dataUrl) 
  }

}