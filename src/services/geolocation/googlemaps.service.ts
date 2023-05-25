import axios from "axios";
import { GeolocationServiceInterface, GeolocationServiceInterfaceOutput } from "./geolocation-service.interface";

export default class GoogleMaps implements GeolocationServiceInterface {
  constructor(public latitude: number, public longitude: number) {}

  async getCurrentLocation(): Promise<GeolocationServiceInterfaceOutput> {
    const { data } = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.latitude},${this.longitude}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL}&language=pt-BR&result_type=administrative_area_level_2`
    );
    const { results } = data;
    const city = results[0].address_components[0].short_name;
    const state = results[0].address_components[1].short_name;
    return {
      city,
      state,
    };
  }
}
