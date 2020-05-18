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
import { PackageInfoResolverService } from './home/package-info-resolver.service';
import { PackageInfoService } from './home/package-info.service';
import { BookingComponent } from './booking/booking.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    FooterMenuComponent,
    AboutComponent,
    HomeComponent,
    TourPackageComponent,
    BookingComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [PackageInfoService, PackageInfoResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
