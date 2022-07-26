import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../core/services/property.service';
import { StoreService } from '../../core/store/store.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [],
})
export class SideMenuComponent implements OnInit {
  constructor(
    private propertyService: PropertyService,
    private storeService: StoreService
  ) {}

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
      this.storeService.state = { propertyList: this.results };
    });
  }

  viewProperty(id: any) {
    this.selectedPropertyId = id;
  }
}
