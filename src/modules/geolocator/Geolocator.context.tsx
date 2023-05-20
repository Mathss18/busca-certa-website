"use client";

import { createContext, useContext, useEffect, useState } from "react";

type GeolocatorContextType = {
  location: { latitude: number; longitude: number };
};

const GeolocatorContext = createContext({} as GeolocatorContextType);

function GeolocatorContextProvider({ children }: { children: React.ReactNode }) {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });

  useEffect(() => {
    if ("geolocation" in navigator) {
      // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        setLocation({ latitude, longitude });
      });
    }
  }, []);

  return (
    <GeolocatorContext.Provider
      value={{
        location,
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
