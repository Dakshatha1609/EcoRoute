"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./map"), { ssr: false });

type Station = { name: string; lat: number; lon: number };
type Coords = { lat: number; lon: number };

export default function Search() {
  const router = useRouter();

  const [userEmail, setUserEmail] = useState("");
  const [places, setPlaces] = useState<string[]>([]);
  const [place, setPlace] = useState("");
  const [message, setMessage] = useState("");
  const [stations, setStations] = useState<Station[]>([]);
  const [selected, setSelected] = useState<Coords | null>(null);
  const [isPredicted, setIsPredicted] = useState(false);
  const [nearestDistance, setNearestDistance] = useState<number | null>(null);

  // 🔐 Auth check + user badge
  useEffect(() => {
    const user = localStorage.getItem("user_email");
    if (!user) {
      router.push("/login");
    } else {
      setUserEmail(user);
    }
  }, [router]);

  // 📍 Load places
  useEffect(() => {
    fetch("http://127.0.0.1:8000/places")
      .then((res) => res.json())
      .then((data) => setPlaces(Object.keys(data)));
  }, []);

  // 🚪 Logout
  const logout = () => {
    localStorage.removeItem("user_email");
    router.push("/login");
  };

  // 📏 Distance
  const haversine = (a: number, b: number, c: number, d: number) => {
    const R = 6371;
    const dLat = ((c - a) * Math.PI) / 180;
    const dLon = ((d - b) * Math.PI) / 180;
    const x =
      Math.sin(dLat / 2) ** 2 +
      Math.cos((a * Math.PI) / 180) *
        Math.cos((c * Math.PI) / 180) *
        Math.sin(dLon / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
  };

  // 🔍 Analyze
  const analyze = async () => {
    if (!place) return;

    const r1 = await fetch("http://127.0.0.1:8000/check-place", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ place }),
    });
    const d1 = await r1.json();

    setMessage(d1.message);
    setIsPredicted(d1.predicted);

    const r2 = await fetch("http://127.0.0.1:8000/nearby-ev", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ place }),
    });
    const d2 = await r2.json();

    setStations(d2.stations);
    setSelected(d2.selected_place);

    if (d2.stations.length > 0) {
      const dist = d2.stations.map((s: Station) =>
        haversine(
          d2.selected_place.lat,
          d2.selected_place.lon,
          s.lat,
          s.lon
        )
      );
      setNearestDistance(Math.min(...dist));
    } else {
      setNearestDistance(null);
    }
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "auto", padding: "40px" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <div>
          <h1 style={{ marginBottom: "4px" }}>
            EV Station Planning System
          </h1>
          <p style={{ opacity: 0.7 }}>
            ML-based spatial decision support for EV infrastructure
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            background: "#f1f5f9",
            padding: "10px 14px",
            borderRadius: "12px",
          }}
        >
          <span style={{ fontSize: "14px", fontWeight: 500 }}>
            👤 {userEmail}
          </span>

          <button
            onClick={logout}
            style={{
              padding: "6px 12px",
              fontSize: "13px",
              borderRadius: "8px",
              border: "none",
              background: "#ef4444",
              color: "white",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Controls */}
      <div style={{ marginTop: "20px" }}>
        <select
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          style={{ padding: "10px", width: "60%" }}
        >
          <option value="">Select Tourist Location</option>
          {places.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>

        <button
          onClick={analyze}
          style={{
            marginLeft: "15px",
            padding: "10px 22px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "6px",
          }}
        >
          Analyze
        </button>
      </div>

      {/* Result */}
      {message && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            background: isPredicted ? "#fee2e2" : "#e0f2fe",
            borderRadius: "10px",
          }}
        >
          <b>{message}</b>
          <p>
            {nearestDistance !== null
              ? `Nearest EV station: ${nearestDistance.toFixed(2)} km`
              : "No nearby EV stations detected"}
          </p>
        </div>
      )}

      {/* Map */}
      <div style={{ marginTop: "25px" }}>
        <Map selected={selected} stations={stations} isPredicted={isPredicted} />
      </div>

      {/* Legend */}
      <div style={{ marginTop: "20px", background: "#f1f5f9", padding: "15px" }}>
        <b>Legend:</b>
        <ul>
          <li>🔵 Tourist Location</li>
          <li>🟢 Existing EV Station</li>
          <li>🔴 ML Predicted EV Station</li>
        </ul>
      </div>
    </div>
  );
}
