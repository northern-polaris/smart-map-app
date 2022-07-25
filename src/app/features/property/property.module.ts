import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyRoutingModule } from './property-routing.module';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import {PropertyListFormComponent} from "./property-list-form/property-list-form.component";


@NgModule({
  declarations: [
    PropertyDetailComponent,
    PropertyListFormComponent
  ],
  imports: [
    CommonModule,
    PropertyRoutingModule
  ]
})
export class PropertyModule { }
