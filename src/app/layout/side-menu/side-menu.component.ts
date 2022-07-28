import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../core/services/property.service';
import { StoreService } from '../../core/store/store.service';
import { Property, PropertyListResponse } from '../../core/models/property';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  constructor(
    private propertyService: PropertyService,
    private storeService: StoreService
  ) {}

  results: Property[] = [];
  agentInfo: any;
  selectedPropertyId: number = 0;

  ngOnInit(): void {
    this.getAllProperties();
    this.onChangeOfPropertyId();
  }

  getAllProperties() {
    this.propertyService
      .getProperties()
      .subscribe((res: PropertyListResponse) => {
        this.results = res.records;
        this.agentInfo = res.agentInfo;
        this.storeService.state = { propertyList: this.results };
      });
  }

  viewProperty(id: any, index: number) {
    // this.selectedPropertyId = id;
    this.storeService.state = {
      selectedPropertyId: id,
      openDetails: true,
      selectedPropertyObj: this.results[index],
    };
  }

  goBack() {
    this.selectedPropertyId = 0;
    this.storeService.state = { selectedPropertyId: 0, openDetails: false, selectedPropertyObj: null};
  }

  onChangeOfPropertyId() {
    this.storeService.stateObserver.subscribe((state) => {
      if (!state?.selectedPropertyId) return;
      this.selectedPropertyId = state.selectedPropertyId;
    });
  }
}
