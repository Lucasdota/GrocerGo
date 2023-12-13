import React, { useState, useEffect, useMemo } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";

type StoreLocation = {
  lat: number;
  lng: number;
  title: string;
  telephone: string;
  timeWeek: string;
  timeHoliday: string;
  address: string;
  state: string;
};

type LatLng = {
  lat: number;
  lng: number;
};

type MapsData = {
  selectedState: string;
  storeLocations: StoreLocation[];
};

export default function GoogleMaps({ selectedState, storeLocations }: MapsData) {
  const [selectedMarkerIndex, setSelectedMarkerIndex] = useState<number | null>(
    null
  );
  const zoomMap = selectedState === "all" ? 5 : 7;
  const defaultCenter = useMemo(() => ({ lat: 39.8283, lng: -98.5795 }), []); // center of USA
  const [center, setCenter] = useState<LatLng>(defaultCenter);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY!,
  });
	
  const centerOfStates: [string, LatLng][] = useMemo(
    () => [
      ["AL", { lat: 33.5207, lng: -86.8025 }],
      ["AZ", { lat: 33.4484, lng: -112.074 }],
      ["CA", { lat: 34.0522, lng: -118.2437 }],
      ["CO", { lat: 39.7392, lng: -104.9903 }],
      ["FL", { lat: 28.6139, lng: -81.209 }],
      ["IL", { lat: 41.8781, lng: -87.6298 }],
      ["MD", { lat: 39.2904, lng: -76.6122 }],
      ["MA", { lat: 42.3601, lng: -71.0589 }],
      ["MO", { lat: 39.0997, lng: -94.5786 }],
      ["NY", { lat: 40.7128, lng: -74.006 }],
      ["NC", { lat: 35.2271, lng: -80.8431 }],
      ["TN", { lat: 36.1627, lng: -86.7816 }],
      ["TX", { lat: 32.7767, lng: -96.797 }],
      ["WA", { lat: 47.6062, lng: -122.3321 }],
    ],
    []
  );

  //clicking outside of the infowindow, closes it
  useEffect(() => {
    let closeHandler = (e: MouseEvent) => {
      const markerText = document.querySelector(".marker-text");
      if (!markerText?.contains(e.target as Node)) {
        setSelectedMarkerIndex(null);
      }
    };
    document.addEventListener("mousedown", closeHandler);
    return () => {
      document.removeEventListener("mousedown", closeHandler);
    };
  }, [setSelectedMarkerIndex]);

  //when selectedState changes, update the map center and zoom to new location
  useEffect(() => {
    // Update the center based on the selected state
    const stateCenter = centerOfStates.find(
      (state) => state[0] === selectedState
    );
    const newCenter =
      selectedState === "all" ? defaultCenter : stateCenter?.[1];
    if (newCenter !== undefined) {
      setCenter(newCenter);
    }
  }, [selectedState, defaultCenter, centerOfStates]);

  return (
    isLoaded && (
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={center}
        zoom={zoomMap}
      >
        {storeLocations.map((location, index) => (
          <Marker
            key={index}
            position={{ lat: location.lat, lng: location.lng }}
            onClick={() => setSelectedMarkerIndex(index)}
          />
        ))}
        {selectedMarkerIndex !== null && (
          <InfoWindow
            position={{
              lat: storeLocations[selectedMarkerIndex].lat,
              lng: storeLocations[selectedMarkerIndex].lng,
            }}
            onCloseClick={() => setSelectedMarkerIndex(null)}
          >
            <div
							aria-label="store informations"
              id="info-window-label"
              className="text-stone-500 font-semibold m-1 marker-text p-1"
            >
              <p className="text-green-4 brightness-125">
                {storeLocations[selectedMarkerIndex].title}
              </p>
              <p>{storeLocations[selectedMarkerIndex].address}</p>
              <br />
              <p className="text-[0.7rem] font-normal">
                Telephone: {storeLocations[selectedMarkerIndex].telephone}
              </p>
              <p className="text-[0.7rem] font-normal">
                Mon-Sat: {storeLocations[selectedMarkerIndex].timeWeek}
              </p>
              <p className="text-[0.7rem] font-normal">
                Sunday and Holidays:{" "}
                {storeLocations[selectedMarkerIndex].timeHoliday}
              </p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    )
  );
}
