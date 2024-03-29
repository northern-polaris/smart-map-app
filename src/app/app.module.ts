import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapModule } from './features/map/map.module';
import { AppRoutingModule } from './app-routing.module';
import { PropertyModule } from './features/property/property.module';
import { SideMenuComponent } from './layout/side-menu/side-menu.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [AppComponent, SideMenuComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    StoreModule.forRoot({}, {}),
    BrowserAnimationsModule,
    MapModule,
    PropertyModule,
    SharedModule,
    HttpClientModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
