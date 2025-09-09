"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  useMap,
} from "react-leaflet";
import { useState } from "react";
import L from "leaflet";

// Fix default icon issue in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// Component to set marker when user clicks
function LocationMarker({ position, setPosition }) {
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
    },
  });
  return position ? <Marker position={position}></Marker> : null;
}

// Component to fly map to user's location
function FlyToLocation({ position }) {
  const map = useMap();
  if (position) {
    map.flyTo(position, 15);
  }
  return null;
}

export default function Map({ position, setPosition }) {
  const handleUseMyLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        setPosition(coords);
      },
      () => {
        alert("Unable to retrieve your location.");
      }
    );
  };

  return (
    <div className="w-full">
      {/* Use My Location Button */}
      <button
        type="button"
        onClick={handleUseMyLocation}
        className="mb-2 px-4 py-2 bg-[#C99372] text-white rounded-lg text-sm hover:bg-[#B67C5F] transition"
      >
        📍 Use My Location
      </button>

      <MapContainer
        center={position || [24.8607, 67.0011]} // Default: Karachi
        zoom={13}
        style={{ height: "300px", width: "100%", borderRadius: "12px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FlyToLocation position={position} />
        <LocationMarker position={position} setPosition={setPosition} />
      </MapContainer>
    </div>
  );
}
