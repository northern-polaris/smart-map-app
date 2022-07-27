import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

import { StoreService } from '../../../core/store/store.service';
import { environment } from '../../../../environments/environment';
import { Map, Marker, NavigationControl } from 'maplibre-gl';

@Component({
  selector: 'app-map-box',
  templateUrl: './map-box.component.html',
  styleUrls: ['./map-box.component.scss'],
})
export class MapBoxComponent implements OnInit, AfterViewInit, OnDestroy {
  map: Map | undefined;
  propertyList: any[] = [];

  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    const initialState = {
      lng: -95.58771409201698,
      lat: 29.7020943332261,
      zoom: 12,
    };
    // Initialization of map
    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: `https://api.maptiler.com/maps/eef16200-c4cc-4285-9370-c71ca24bb42d/style.json?key=${environment.apiKey}`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom,
    });

    // Sample how to add a mark
    this.map.addControl(new NavigationControl());

    this.storeService.stateObserver.subscribe((state: any) => {
      if (!state) return;
      this.propertyList = state.propertyList;
      for (const property of this.propertyList) {
        if (this.map instanceof Map) {
          new Marker({ color: '#FF0000' })
            .setLngLat([property.geocode.Longitude, property.geocode.Latitude])
            .addTo(this.map);
        }
      }
    });

    // This listen for clicks on map
    this.map.on('click', function (e) {
      // The event object (e) contains information like the
      // coordinates of the point on the map that was clicked.
      console.log('A click event has occurred at ' + e.lngLat);
      //  Open mat dialog on click, to create new mark
    });
  }

  ngOnDestroy() {
    this.map?.remove();
  }
}
