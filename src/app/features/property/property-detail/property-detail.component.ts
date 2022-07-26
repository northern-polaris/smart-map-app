import { Component, Input, OnInit } from '@angular/core';
import { PropertyService } from '../../../core/services/property.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss'],
})
export class PropertyDetailComponent implements OnInit {
  @Input() propertyID?: number;
  property: any;

  constructor(private propertyService: PropertyService) {}

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
}
