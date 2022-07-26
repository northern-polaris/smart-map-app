import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { generateHttpParams } from '../utils';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  constructor(private httpClient: HttpClient) {}

  getProperties() {
    const url = 'https://app.smartapartmentdata.com/List/json/listItems.aspx';

    const params = {
      listID: '5638557',
      token: 'A0E2523B25B805CBB6F8EC9D98AF56457EE7A255',
    };
    const options = { params: generateHttpParams(params) };

    return this.httpClient.get<Observable<any>>(url, options);
  }
}
