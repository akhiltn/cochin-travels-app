import { Injectable } from "@angular/core";
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { BookingComponent } from "../booking/booking.component";

@Injectable()
export class BookingFormDeactivateGuard
  implements CanDeactivate<BookingComponent> {
  canDeactivate(component: BookingComponent): boolean {
    console.log("valid " + component.contactUsForm.valid);
    console.log("pristine " + component.contactUsForm.pristine);

    if (component.contactUsForm.pristine || component.contactUsForm.valid) {
      return true;
    } else {
      if (confirm("Are you sure about leaving this page?")) {
        return true;
      } else {
        return false;
      }
    }
  }
}
