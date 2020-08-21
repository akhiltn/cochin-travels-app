import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig, HammerModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MaterialModule } from "./material.module";
import { HeaderNavComponent } from "./header-nav/header-nav.component";
import { RoutingModule } from "./routing.module";
import { HomeComponent } from "./home/home.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FooterMenuComponent } from "./footer-menu/footer-menu.component";
import { TourPackageComponent } from "./home/tour-package/tour-package.component";
import { AboutComponent } from "./about/about.component";
import { HttpClientModule } from "@angular/common/http";
import { PackageInfoResolverService } from "./common/package-info-resolver.service";
import { PackageInfoService } from "./common/package-info.service";
import { BookingComponent } from "./booking/booking.component";
import { TourDetailsComponent } from "./tour-details/tour-details.component";
import { TourDetailsService } from "./common/tour-details.service";
import { ErrorPageComponent } from "./common/error-page/error-page.component";
import { ReactiveFormsModule } from "@angular/forms";
import { PriceTableComponent } from "./tour-details/price-table/price-table.component";
import { PriceListService } from "./common/price-list.service";
import { TourDetailsActivatorGuard } from "./common/tour-details-activator.guard";
import { BookingFormDeactivateGuard } from "./common/booking-form-deactivate.guard";
import {
  RecaptchaModule,
  RECAPTCHA_SETTINGS,
  RecaptchaSettings,
  RecaptchaFormsModule
} from "ng-recaptcha";
import * as Hammer from 'hammerjs'; 


export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
      // override hammerjs default configuration
      swipe: { direction: Hammer.DIRECTION_ALL }
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    FooterMenuComponent,
    AboutComponent,
    HomeComponent,
    TourPackageComponent,
    BookingComponent,
    TourDetailsComponent,
    PriceTableComponent,
    ErrorPageComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    HammerModule
  ],
  providers: [
    PackageInfoService,
    PackageInfoResolverService,
    TourDetailsService,
    TourDetailsActivatorGuard,
    PriceListService,
    BookingFormDeactivateGuard,
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: "6Lf8o6cZAAAAAEBejRAVK374DkbPtWXGMJVFKWhJ"
      } as RecaptchaSettings
    },
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerGestureConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
