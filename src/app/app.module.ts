import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { RoutingModule } from './routing.module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterMenuComponent } from './footer-menu/footer-menu.component';
import { TourPackageComponent } from './home/tour-package/tour-package.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { PackageInfoResolverService } from './common/package-info-resolver.service';
import { PackageInfoService } from './common/package-info.service';
import { BookingComponent } from './booking/booking.component';
import { TourDetailsComponent } from './tour-details/tour-details.component';
import { TourDetailsService } from './common/tour-details.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    FooterMenuComponent,
    AboutComponent,
    HomeComponent,
    TourPackageComponent,
    BookingComponent,
    TourDetailsComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [PackageInfoService, PackageInfoResolverService, TourDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
