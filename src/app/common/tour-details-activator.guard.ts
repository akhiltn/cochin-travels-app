import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  CanActivate,
  RouterStateSnapshot
} from "@angular/router";
import { ItenaryInfo } from "./itenary-info";
import { TourDetailsService } from "./tour-details.service";
import { Observable, of } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable()
export class TourDetailsActivatorGuard implements CanActivate {
  constructor(private tourDetailService: TourDetailsService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    let id = route.params["id"];

   return this.tourDetailService
      .getItenaryInfoById(id).pipe(map(x => !!x.length));
  }
}
