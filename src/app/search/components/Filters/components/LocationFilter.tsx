"use client";

import { useEffect, useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import LocationSelect from "@/components/location-select/LocationSelect";
import { useGeolocatorContext } from "@/modules/geolocator/Geolocator.context";
import { GeolocationServiceInterfaceOutput } from "@/services/geolocation/geolocation-service.interface";

export default function LocationFilter({ ...rest }: { [x: string]: any }) {
  const { location, setLocation } = useGeolocatorContext();
  const [selectedLocation, setSelectedLocation] = useState<GeolocationServiceInterfaceOutput | null>(location);
  const initialText = location ? `${location?.city}, ${location?.state}, Brasil` : "";

  useEffect(() => {
    setLocation(selectedLocation);
  }, [selectedLocation]);

  return (
    <section className="w-full mb-8" {...rest}>
      <div className="flex">
        <h2 className="text-lg font-semibold mb-4">Você está em</h2>
        <span
          className="label-text label tooltip tooltip-right"
          data-tip={`Quando você seleciona sua localização, buscamos produtos de fornecedores que atuam em sua região`}
        >
          <FaInfoCircle />
        </span>
      </div>
      <LocationSelect setSelectedLocation={setSelectedLocation} initialText={initialText} />
    </section>
  );
}
