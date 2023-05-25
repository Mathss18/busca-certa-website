import axios from "axios";
import { getUfByStateName } from "../../helpers/geolocalization.helper";
import { GeolocationServiceInterface, GeolocationServiceInterfaceOutput } from "./geolocation-service.interface";

export default class BigDataCloud implements GeolocationServiceInterface {
  constructor(public latitude: number, public longitude: number) {}

  async getCurrentLocation(): Promise<GeolocationServiceInterfaceOutput> {
    const { data } = await axios.get(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${this.latitude}&longitude=${this.longitude}&localityLanguage=pt`
    );
    const { principalSubdivision, city } = data;
    return {
      state: getUfByStateName(principalSubdivision),
      city,
    };
  }
}
