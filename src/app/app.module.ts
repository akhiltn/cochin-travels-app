import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { RoutingModule } from './routing.module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterMenuComponent } from './footer-menu/footer-menu.component';
import { TourPackageComponent } from './tour-package/tour-package.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    FooterMenuComponent,
    HomeComponent,
    TourPackageComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
