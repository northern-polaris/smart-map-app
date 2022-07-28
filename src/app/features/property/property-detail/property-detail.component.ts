import { Component, Input, OnInit } from '@angular/core';
import { PropertyService } from '../../../core/services/property.service';
import { MatDialog } from '@angular/material/dialog';
import { ImageDialogComponent } from './image-dialog/image-dialog.component';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss'],
})
export class PropertyDetailComponent implements OnInit {
  @Input() propertyID?: number;
  property: any;
  panelOpenState = false;

  constructor(
    private propertyService: PropertyService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getProperty();
  }

  getProperty() {
    if (this.propertyID) {
      this.propertyService
        .getProperty(this.propertyID)
        .subscribe((res: any) => {
          this.property = res;
        });
    }
  }

  openDialog(imgSrc: string): void {
    const dialogRef = this.dialog.open(ImageDialogComponent, {
      width: '1000px',
      data: { src: imgSrc },
    });
  }
}
