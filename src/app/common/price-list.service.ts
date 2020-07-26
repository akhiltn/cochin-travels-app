import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PriceTable } from './price-table';
import { Observable } from 'rxjs';

@Injectable()
export class PriceListService {

  private priceList : PriceTable[];

  private dataUrl = "assets/jsonData/price-list.json";

  constructor(private http: HttpClient) { }

  getPriceList(): Observable<PriceTable[]> {
    return this.http.get<PriceTable[]>(this.dataUrl);
  }

}