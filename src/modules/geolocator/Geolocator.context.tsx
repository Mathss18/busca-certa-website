"use client";

import { createContext, useContext, useEffect, useLayoutEffect, useState } from "react";
import { GeolocationServiceInterfaceOutput } from "../../services/geolocation/geolocation-service.interface";
import GoogleMaps from "../../services/geolocation/googlemaps.service";

type GeolocatorContextType = {
  latLong: { latitude: number; longitude: number };
  location: GeolocationServiceInterfaceOutput | null;
  setLocation: (location: GeolocationServiceInterfaceOutput | null) => void;
  clearLocation: () => void;
};

const GeolocatorContext = createContext({} as GeolocatorContextType);

function GeolocatorContextProvider({ children }: { children: React.ReactNode }) {
  const [latLong, setLatLong] = useState({ latitude: 0, longitude: 0 });
  const [location, setLocation] = useState<GeolocationServiceInterfaceOutput | null>(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        setLatLong({ latitude, longitude });
      });
    }
  }, []);

  async function getCurrentLocation() {
    if (sessionStorage.getItem("location")) return setLocation(JSON.parse(sessionStorage.getItem("location")!));
    const geoLocationService = new GoogleMaps(latLong.latitude, latLong.longitude);
    const locationInfo = await geoLocationService.getCurrentLocation();
    sessionStorage.setItem("location", JSON.stringify(locationInfo));
    setLocation(locationInfo);
  }

  useEffect(() => {
    if (latLong.latitude === 0 || latLong.longitude === 0) return;
    if (sessionStorage.getItem("location")) return;
    getCurrentLocation();
  }, [latLong]);

  useLayoutEffect(() => {
    if (!sessionStorage.getItem("location")) return;
    setLocation(JSON.parse(sessionStorage.getItem("location")!));
  }, []);

  useEffect(() => {
    if (!location) return;
    sessionStorage.setItem("location", JSON.stringify(location));
  }, [location]);

  function clearLocation() {
    sessionStorage.removeItem("location");
    setLocation(null);
  }

  return (
    <GeolocatorContext.Provider
      value={{
        latLong,
        location,
        setLocation,
        clearLocation,
      }}
    >
      {children}
    </GeolocatorContext.Provider>
  );
}

export function useGeolocatorContext() {
  return useContext(GeolocatorContext);
}

export default GeolocatorContextProvider;
