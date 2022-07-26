import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import {PropertyListItemComponent} from "./property-list-form/property-list-item.component";

const routes: Routes = [
  { path: 'details/id', component: PropertyDetailComponent },
  { path: '', component: PropertyListItemComponent },
  { path: 'details', component: PropertyListItemComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertyRoutingModule {}
