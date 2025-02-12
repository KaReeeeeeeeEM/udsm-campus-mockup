import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polygon, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-routing-machine";

// Define a TypeScript interface for waypoints
interface LatLng {
  lat: number;
  lng: number;
}

// UDSM Coordinates
const positionUDSM: LatLng = { lat: -6.7741, lng: 39.2394 };
const randomLocation: LatLng = { lat: -6.7730, lng: 39.2360 };
const udsmLibrary: LatLng = { lat: -6.7702, lng: 39.2412 };

// Colleges and Landmarks
const locations = [
  { name: "CoICT (College of ICT)", coords: { lat: -6.7735, lng: 39.2350 } },
  { name: "CoHU (College of Humanities)", coords: { lat: -6.7715, lng: 39.2375 } },
  { name: "CoNAS (College of Natural & Applied Sciences)", coords: { lat: -6.7728, lng: 39.2400 } },
  { name: "CoAF (College of Agriculture & Fisheries)", coords: { lat: -6.7750, lng: 39.2385 } },
  { name: "UDBS (University of Dar es Salaam Business School)", coords: { lat: -6.7695, lng: 39.2390 } },
  { name: "UDSM Main Gate", coords: { lat: -6.7770, lng: 39.2355 } },
];

// UDSM Boundary (Polygon)
const udsmBoundary: L.LatLngTuple[] = [
  [-6.7780, 39.2330],
  [-6.7690, 39.2330],
  [-6.7690, 39.2425],
  [-6.7780, 39.2425],
];

// Routing component
const RoutingMachine: React.FC = () => {
  const map = useMap();
  const routingControlRef = useRef<L.Routing.Control | null>(null);

  useEffect(() => {
    if (!map || routingControlRef.current) return;

    routingControlRef.current = L.Routing.control({
      waypoints: [L.latLng(randomLocation), L.latLng(udsmLibrary)],
      routeWhileDragging: true,
    }).addTo(map);

    return () => {
      if (map && routingControlRef.current) {
        map.removeControl(routingControlRef.current);
      }
    };
  }, [map]);

  return null;
};

// Main Map Component
export default function Map() {
  return (
    <div className="h-[80vh] w-full mx-auto bg-black text-white">
      <MapContainer
        center={positionUDSM}
        zoom={16}
        className="h-full w-full rounded"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {/* UDSM Boundary */}
        <Polygon positions={udsmBoundary} pathOptions={{ color: "blue" }} />

        {/* College & Landmark Markers */}
        {locations.map((loc, index) => (
          <Marker key={index} position={loc.coords}>
            <Popup>{loc.name}</Popup>
          </Marker>
        ))}

        {/* Route */}
        <RoutingMachine />
      </MapContainer>
    </div>
  );
}
