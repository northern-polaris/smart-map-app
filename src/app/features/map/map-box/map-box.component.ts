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
import { Map, Marker, NavigationControl, Popup } from 'maplibre-gl';
import { findCenter } from '../../../core/utils';
import {Property} from "../../../core/models/property";

@Component({
  selector: 'app-map-box',
  templateUrl: './map-box.component.html',
  styleUrls: ['./map-box.component.scss'],
})
export class MapBoxComponent implements OnInit, AfterViewInit, OnDestroy {
  map?: Map;
  propertyList: Property[] = [];
  mapMarkers: Marker[] = [];
  geoCoordinates: any[] = [];

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
      // center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom,
    });

    // Sample how to add a mark
    this.map.addControl(new NavigationControl());

    this.storeService.stateObserver.subscribe((state: any) => {
      if (!state) return;
      if (!(this.map instanceof Map)) return;
      this.propertyList = state.propertyList;
      for (const property of this.propertyList) {
        this.geoCoordinates.push({
          lat: property.geocode.Latitude,
          lng: property.geocode.Longitude,
        });

        const marker = new Marker({
          color: '#FF0000',
          // draggable: true
        });
        marker
          .setLngLat([property.geocode.Longitude, property.geocode.Latitude])
          .addTo(this.map);

        this.addOnClickMarkerEventListener(marker, property);
        this.addPopupMarkerEvents(marker, property);

        this.mapMarkers.push(marker); // to store all markers in array, no purpose for the moment
      }
      const centerLocation = findCenter(this.geoCoordinates);
      this.map.setCenter(centerLocation);
      this.map.setZoom(initialState.zoom);
    });

    this.listenMapClicks();
  }

  addPopupMarkerEvents(marker: Marker, property: any) {
    // Set PopUp or Tooltip on hover
    const htmlStr = `
      <h1>${property.name}</h1>
      <h3>${property.streetAddress}</h3>
      <img src="${property.photo}" alt="">`;

    marker.getElement().addEventListener('mouseenter', (e) => {
      marker.setPopup(new Popup().setHTML(htmlStr));
      marker.togglePopup(); // toggle popup open or closed
    });
    // Remove popup on leave
    marker.getElement().addEventListener('mouseleave', (e) => {
      marker.getPopup().remove();
    });
  }

  addOnClickMarkerEventListener(marker: Marker, property: any) {
    marker.getElement().addEventListener('click', (e) => {
      this.storeService.state = { selectedPropertyId: property.propertyID };
      for (let markerItem of this.mapMarkers) {
        markerItem.remove();
      }
      if (this.map instanceof Map) {
        marker.addTo(this.map);
        this.map.setCenter({
          lat: property.geocode.Latitude,
          lng: property.geocode.Longitude,
        });
        this.map.setZoom(15);
      }
    });
  }

  listenMapClicks() {
    if (!(this.map instanceof Map)) return;
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
