import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapBoxComponent } from './map-box/map-box.component';
import {PropertyDetailComponent} from "../property/property-detail/property-detail.component";

const routes: Routes = [
  { path: '', component: MapBoxComponent },
  {
    path: ' detail', component: PropertyDetailComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapRoutingModule {}
