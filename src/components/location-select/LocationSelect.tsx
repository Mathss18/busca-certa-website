import React, { useState } from "react";
import usePlacesAutocompleteService from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import { FaMapMarkerAlt, FaTimes } from "react-icons/fa";

const LocationSelect = ({ setSelectedLocation, initialText }: { setSelectedLocation: (item: any) => void; initialText: string }) => {
  const [inputValue, setInputValue] = useState(initialText);
  const [showDropdown, setShowDropdown] = useState(false);

  const { placePredictions, getPlacePredictions, isPlacePredictionsLoading } = usePlacesAutocompleteService({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL,
    options: {
      types: ["(cities)"],
      componentRestrictions: { country: "br" },
    },
  });

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
    getPlacePredictions({ input: e.target.value });
    setShowDropdown(true);
  };

  const handleSelect = (item: any) => {
    const city = item?.terms[0].value;
    const state = item?.terms[1].value;
    setSelectedLocation({ city, state } ?? null);
    setInputValue(item?.description ?? "");
    setShowDropdown(false);
  };

  return (
    <div className="relative">
      <FaMapMarkerAlt className="absolute left-2 top-1/2 transform -translate-y-1/2" />
      <input
        className="input input-bordered w-full pr-8 pl-8"
        placeholder="Selecione sua localização"
        value={inputValue}
        onChange={handleChange}
      />
      {isPlacePredictionsLoading && (
        <div className="loader ease-linear rounded-full border-2 border-t-2 border-gray-200 h-5 w-5 absolute right-2 top-1/2 transform -translate-y-1/2"></div>
      )}
      {!isPlacePredictionsLoading && (
        <div
          className="cursor-pointer h-5 w-5 absolute right-2 top-1/2 transform -translate-y-1/2"
          onClick={() => {
            setSelectedLocation(null);
            setInputValue("");
          }}
        >
          <FaTimes />
        </div>
      )}
      {showDropdown && placePredictions.length > 0 && (
        <div className="absolute z-10 mt-2 w-full bg-white shadow-lg max-h-60 rounded-md overflow-auto">
          {placePredictions.map((item) => (
            <div className="flex items-center cursor-pointer hover:bg-gray-200 p-2" key={item.place_id} onClick={() => handleSelect(item)}>
              <FaMapMarkerAlt className="mr-2" />
              {item.description}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationSelect;
