"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [showWelcome, setShowWelcome] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    if (!email) return;

    localStorage.setItem("user_email", email);

    // show welcome popup
    setShowWelcome(true);

    // redirect after short delay
    setTimeout(() => {
      router.push("/search");
    }, 1500);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a, #1e3a8a)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, sans-serif",
        position: "relative",
      }}
    >
      {/* Welcome popup */}
      {showWelcome && (
        <div
          style={{
            position: "absolute",
            top: "30px",
            right: "30px",
            background: "#0f172a",
            color: "white",
            padding: "14px 20px",
            borderRadius: "12px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
            fontSize: "14px",
            fontWeight: 500,
            zIndex: 1000,
          }}
        >
          Welcome {email}, explore EV planning insights 🚗⚡
        </div>
      )}

      <div
        style={{
          width: "420px",
          padding: "40px",
          borderRadius: "16px",
          background: "rgba(255,255,255,0.95)",
          boxShadow: "0 30px 60px rgba(0,0,0,0.25)",
        }}
      >
        <h2 style={{ fontSize: "28px", marginBottom: "8px" }}>
          Secure Access
        </h2>

        <p style={{ opacity: 0.7, marginBottom: "24px" }}>
          Authorized access to EV planning dashboard
        </p>

        <input
          type="email"
          placeholder="Institutional Email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            fontSize: "15px",
            borderRadius: "10px",
            border: "1px solid #cbd5e1",
            marginBottom: "20px",
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "14px",
            fontSize: "16px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Login & Continue
        </button>

        <p
          style={{
            marginTop: "18px",
            fontSize: "12px",
            opacity: 0.6,
            textAlign: "center",
          }}
        >
          Academic prototype • No personal data stored
        </p>
      </div>
    </div>
  );
}
