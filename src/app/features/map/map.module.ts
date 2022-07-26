import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MapRoutingModule} from './map-routing.module';
import {MapBoxComponent} from './map-box/map-box.component';
import {PropertyModule} from '../property/property.module';

@NgModule({
  declarations: [MapBoxComponent],
  imports: [CommonModule, MapRoutingModule, PropertyModule],
})
export class MapModule {
}
