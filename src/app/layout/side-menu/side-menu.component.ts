import { Component, OnInit } from '@angular/core';
import {PropertyService} from "../../core/services/property.service";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [
  ]
})
export class SideMenuComponent implements OnInit {

  constructor(private propertyService: PropertyService) { }
  results: any;

  ngOnInit(): void {
    this.getAllProperties();

  }
  getAllProperties() {
    this.results = this.propertyService.getProperties().subscribe((res) => {
      return res;
    });
    console.log(this.results);
  }

}
