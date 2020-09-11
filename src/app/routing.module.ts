import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { TourPackageComponent } from "./home/tour-package/tour-package.component";
import { AboutComponent } from "./about/about.component";
import { PackageInfoResolverService } from "./common/package-info-resolver.service";
import { BookingComponent } from "./booking/booking.component";
import { TourDetailsComponent } from "./tour-details/tour-details.component";
import { ErrorPageComponent } from "./common/error-page/error-page.component";
import { TourDetailsActivatorGuard } from "./common/tour-details-activator.guard";
import { BookingFormDeactivateGuard } from "./common/booking-form-deactivate.guard";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    resolve: {
      packageInfoList: PackageInfoResolverService,
    },
  },
  { path: "about", component: AboutComponent },
  {
    path: "booking/:id",
    component: BookingComponent,
    canDeactivate: [BookingFormDeactivateGuard],
  },
  {
    path: "booking",
    component: BookingComponent,
    canDeactivate: [BookingFormDeactivateGuard],
  },
  {
    path: "tourDetails/:id",
    component: TourDetailsComponent,
    canActivate: [TourDetailsActivatorGuard],
  },
  { path: "error", component: ErrorPageComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" }),
  ],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule {}
