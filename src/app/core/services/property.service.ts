import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private httpClient: HttpClient) {

  }
  getProperties() {
    return this.httpClient.get(
      'https://app.smartapartmentdata.com/List/json/propertyItem.aspx?listID=5638557&token=A0E2523B25B805CBB6F8EC9D98AF56457EE7A255&propertyID=70275'
    );
  }
}
