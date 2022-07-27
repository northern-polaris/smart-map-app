import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyRoutingModule } from './property-routing.module';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { PropertyListItemComponent } from './property-list-item/property-list-item.component';
import { SharedModule } from '../../shared/shared.module';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
  declarations: [PropertyDetailComponent, PropertyListItemComponent],
  exports: [PropertyListItemComponent, PropertyDetailComponent],
  imports: [CommonModule, PropertyRoutingModule, SharedModule, FlexModule],
})
export class PropertyModule {}
