import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TourPackageComponent } from './home/tour-package/tour-package.component';
import { AboutComponent } from './about/about.component';
import { PackageInfoResolverService } from './common/package-info-resolver.service';
import { BookingComponent } from './booking/booking.component';
import { TourDetailsComponent } from './tour-details/tour-details.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent, resolve: {
      'packageInfoList': PackageInfoResolverService
    }

  },
  { path: 'about', component: AboutComponent },
  { path: 'booking', component: BookingComponent },
   { path: 'tourDetails', component: TourDetailsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }