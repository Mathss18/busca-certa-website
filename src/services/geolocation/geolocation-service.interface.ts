export type GeolocationServiceInterfaceOutput = {
  state: string;
  city: string;
};

export type GeolocationServiceInterfaceInput = {
  latitude: number;
  longitude: number;
};

export interface GeolocationServiceInterface {
  latitude: number;
  longitude: number;
  getCurrentLocation(params: GeolocationServiceInterfaceInput): Promise<GeolocationServiceInterfaceOutput>;
}
