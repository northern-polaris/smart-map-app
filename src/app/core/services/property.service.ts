import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { generateHttpParams } from '../utils';
import { Observable } from 'rxjs';
import {PropertyListResponse} from "../models/property";

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  baseUrl = 'https://app.smartapartmentdata.com/List/json/';
  baseParams = {
    listID: '5638557',
    token: 'A0E2523B25B805CBB6F8EC9D98AF56457EE7A255',
  };

  constructor(private httpClient: HttpClient) {}

  getProperties(): Observable<PropertyListResponse> {
    const url = `${this.baseUrl}listItems.aspx`;
    const options = { params: generateHttpParams(this.baseParams) };

    return this.httpClient.get<PropertyListResponse>(url, options);
  }

  getProperty(id: number): Observable<any> {
    const params = { ...this.baseParams, propertyID: id };
    const options = { params: generateHttpParams(params) };
    const url = `${this.baseUrl}propertyItem.aspx`;

    return this.httpClient.get<Observable<any>>(url, options);
  }
}
