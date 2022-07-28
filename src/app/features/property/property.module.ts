import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { PropertyListItemComponent } from './property-list-item/property-list-item.component';
import { SharedModule } from '../../shared/shared.module';
import { FlexModule } from '@angular/flex-layout';
import { ImageDialogComponent } from './property-detail/image-dialog/image-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    PropertyDetailComponent,
    PropertyListItemComponent,
    ImageDialogComponent,
  ],
  exports: [PropertyListItemComponent, PropertyDetailComponent],
  imports: [CommonModule, SharedModule, FlexModule, MatDialogModule],
})
export class PropertyModule {}
