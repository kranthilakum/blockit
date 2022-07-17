export interface Listing {
  id: string;
  name: string;
  description?: string;
  price: string;
  categories?: string[];
  lastUpdated?: string;
  trader?: Trader;
  location?: Location;
  isPosted?: boolean;
}

export interface Trader {
  id: string;
  name: string;
  email: string;
}

export interface Location {
  id: string;
  address: Address;
  coordinates?: Coordinates;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  country: string;
  zip: string;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}
