import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapBoxComponent } from './map-box/map-box.component';
import { PropertyModule } from '../property/property.module';

@NgModule({
  declarations: [MapBoxComponent],
  imports: [CommonModule, PropertyModule],
  exports: [MapBoxComponent],
})
export class MapModule {}
