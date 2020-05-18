import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { PackageInfo } from './package-info';
import { PackageInfoService } from './package-info.service';
import { map } from 'rxjs/operators';

@Injectable()
export class PackageInfoResolverService implements Resolve<any>{

  constructor(private packageInfoService: PackageInfoService) { }

  resolve(){
    return this.packageInfoService.getpackageInfo().pipe(map(packageInfoList => packageInfoList));
  }

}