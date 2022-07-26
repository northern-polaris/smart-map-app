import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyRoutingModule } from './property-routing.module';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { PropertyListFormComponent } from './property-list-form/property-list-form.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [PropertyDetailComponent, PropertyListFormComponent],
  exports: [PropertyListFormComponent],
  imports: [CommonModule, PropertyRoutingModule, SharedModule],
})
export class PropertyModule {}
