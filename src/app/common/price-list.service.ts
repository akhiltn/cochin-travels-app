import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PriceTable } from './price-table';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class PriceListService {

  private priceList : PriceTable[];

  //private dataUrl = "assets/jsonData/price-list.json";
  private dataUrl = environment.UTIL_API+"/sheets/getSheetByID/Sheet3";

  constructor(private http: HttpClient) { }

  getPriceList(): Observable<PriceTable[]> {
    return this.http.get<PriceTable[]>(this.dataUrl);
  }

}