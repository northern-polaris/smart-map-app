export interface PropertyListResponse {
  agentInfo: any;
  records: Property[];
}

export interface Property {
  listID: number;
  order: number;
  propertyID: number;
  name: string;
  streetAddress: string;
  city: string;
  state: string;
  pets: string;
  washerDry: string;
  photo: string;
  favorite: boolean;
  onsiteManager: string;
  management: string;
  proximity: number;
  section8: number;
  highValueAmenities: string[];
  paidUtilities: string[];
  geocode: Geocode;
}

interface Geocode {
  Longitude: number;
  Latitude: number;
  Percision: number;
  IsValid: number;
}
