import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../core/services/property.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [
    `
      .header {
        background-color: #2f5d8d;
      }
    `,
  ],
})
export class SideMenuComponent implements OnInit {
  constructor(private propertyService: PropertyService) {}

  results: any;
  agentInfo: any;
  selectedPropertyId: number = 0;

  ngOnInit(): void {
    this.getAllProperties();
  }

  getAllProperties() {
    this.propertyService.getProperties().subscribe((res: any) => {
      this.results = res.records;
      this.agentInfo = res.agentInfo;
    });
  }

  viewProperty(id: any) {
    this.selectedPropertyId = id;
  }

  goBack() {
    this.selectedPropertyId = 0;
  }
}
