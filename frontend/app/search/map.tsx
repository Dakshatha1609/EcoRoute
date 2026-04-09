"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

type Station = { name: string; lat: number; lon: number };
type Coords = { lat: number; lon: number };

const blueIcon = new L.Icon({
  iconUrl: "https://maps.gstatic.com/mapfiles/ms2/micons/blue-dot.png",
  iconSize: [32, 32],
});

const greenIcon = new L.Icon({
  iconUrl: "https://maps.gstatic.com/mapfiles/ms2/micons/green-dot.png",
  iconSize: [32, 32],
});

const redIcon = new L.Icon({
  iconUrl: "https://maps.gstatic.com/mapfiles/ms2/micons/red-dot.png",
  iconSize: [32, 32],
});

export default function Map({
  selected,
  stations,
  isPredicted,
}: {
  selected: Coords | null;
  stations: Station[];
  isPredicted: boolean;
}) {
  if (!selected) return null;

  return (
    <MapContainer
      center={[selected.lat, selected.lon]}
      zoom={12}
      style={{ height: "420px", width: "100%", borderRadius: "14px" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* Tourist location */}
      <Marker
        position={[selected.lat, selected.lon]}
        icon={isPredicted ? redIcon : blueIcon}
      >
        <Popup>
          {isPredicted
            ? "Predicted EV Station Location"
            : "Tourist Location"}
        </Popup>
      </Marker>

      {/* Existing EV stations */}
      {stations.map((s, i) => (
        <Marker key={i} position={[s.lat, s.lon]} icon={greenIcon}>
          <Popup>{s.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
