import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import {PropertyListFormComponent} from "./property-list-form/property-list-form.component";

const routes: Routes = [
  { path: 'details/id', component: PropertyDetailComponent },
  { path: '', component: PropertyListFormComponent },
  { path: 'details', component: PropertyListFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertyRoutingModule {}
