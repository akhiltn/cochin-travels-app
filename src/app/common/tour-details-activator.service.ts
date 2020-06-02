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

@Injectable()
export class TourDetailsActivatorService implements CanActivate {
  constructor(private tourDetailService: TourDetailsService) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    let id = +route.params["id"];
    let isTruthy = false;
    await this.tourDetailService
      .getItenaryInfoById(id)
      .then((res: ItenaryInfo[]) => (isTruthy = !!res.length));
    console.log("canActivate  "+ id +" "+isTruthy);
    return isTruthy;
  }
}
