import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourPackageComponent } from './tour-package/tour-package.component';
import { MaterialModule } from '../material.module';
import { HomeComponent } from './home.component';
import { PackageInfoServiceService } from './package-info-service.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    HomeComponent,
    TourPackageComponent
  ],
  providers: [PackageInfoServiceService]
})
export class HomeModule { }