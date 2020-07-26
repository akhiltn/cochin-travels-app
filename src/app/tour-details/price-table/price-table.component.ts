import { Component, OnInit } from '@angular/core';
import { PriceListService } from '../../common/price-list.service';
import { PriceTable } from '../../common/price-table';

@Component({
  selector: 'price-table',
  templateUrl: './price-table.component.html',
  styleUrls: ['./price-table.component.css']
})
export class PriceTableComponent implements OnInit {

  priceList: PriceTable[];
  priceMap = new Map<String, PriceTable[]>();
  tableHeadings: string[] = ['Package Class', 'Number of Persons','Cost/Head (OffSeason-Season)'];

  constructor(private priceService: PriceListService) { }

  ngOnInit() {
    this.priceService.getPriceList().subscribe((res: PriceTable[]) => {
      this.priceList = res;
      this.covertToPriceMap(res);
    });
  }

  covertToPriceMap(priceList : PriceTable[]){
    priceList.forEach((pkg: PriceTable) => {
      if(this.priceMap.get(pkg.packageClass)){
          this.priceMap.get(pkg.packageClass).push(pkg);
      }
      else {
        this.priceMap.set(pkg.packageClass,new Array<PriceTable>(pkg));
      }
    });
  }

}