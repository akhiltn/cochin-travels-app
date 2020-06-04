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
import { TourDetailsActivatorService } from "./common/tour-details-activator.service";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    resolve: {
      packageInfoList: PackageInfoResolverService
    }
  },
  { path: "about", component: AboutComponent },
  { path: "booking/:id", component: BookingComponent },
  { path: "booking", component: BookingComponent },
  {
    path: "tourDetails/:id",
    component: TourDetailsComponent,
    canActivate: [TourDetailsActivatorService]
  },
  { path: "error", component: ErrorPageComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule {}
