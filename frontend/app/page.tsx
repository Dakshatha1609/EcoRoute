import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        padding: "70px",
        maxWidth: "1300px",
        margin: "auto",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* HERO SECTION */}
      <section
        style={{
          background: "linear-gradient(135deg, #1e3a8a, #2563eb)",
          padding: "60px",
          borderRadius: "18px",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "42px", fontWeight: 700 }}>
          EV Infrastructure Planning System
        </h1>

        <p
          style={{
            maxWidth: "820px",
            marginTop: "18px",
            lineHeight: 1.6,
            opacity: 0.95,
            fontSize: "16px",
          }}
        >
          A machine learning–driven spatial decision support system designed to
          identify optimal future EV charging station locations using tourist
          demand patterns, road accessibility, land feasibility, and
          infrastructure gap analysis.
        </p>

        <Link href="/login">
          <button
            style={{
              marginTop: "35px",
              padding: "14px 34px",
              background: "white",
              color: "#1e3a8a",
              borderRadius: "10px",
              border: "none",
              fontSize: "16px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Launch Planner →
          </button>
        </Link>
      </section>

      {/* FEATURES */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "28px",
          marginTop: "60px",
        }}
      >
        <Card
          title="Interpretable ML Models"
          tag="Model Layer"
          desc="Explainable Boosting Machines (EBM) and Neural Additive Models (NAM) provide transparent, feature-level insights into EV station suitability."
        />

        <Card
          title="Spatial Decision Support"
          tag="GIS Layer"
          desc="Interactive GIS-based visualization of tourist hotspots, existing EV infrastructure, and model-predicted future charging locations."
        />

        <Card
          title="Infrastructure Gap Analysis"
          tag="Analytics Layer"
          desc="Distance-based accessibility metrics quantify underserved regions to support evidence-driven EV deployment decisions."
        />
      </section>
    </main>
  );
}

function Card({
  title,
  desc,
  tag,
}: {
  title: string;
  desc: string;
  tag: string;
}) {
  return (
    <div
      style={{
        padding: "26px",
        borderRadius: "14px",
        background: "#f8fafc",
        boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
        borderLeft: "5px solid #2563eb",
      }}
    >
      <span
        style={{
          fontSize: "12px",
          fontWeight: 600,
          color: "#2563eb",
          textTransform: "uppercase",
        }}
      >
        {tag}
      </span>

      <h3 style={{ marginTop: "10px", marginBottom: "10px" }}>{title}</h3>

      <p style={{ opacity: 0.85, lineHeight: 1.6 }}>{desc}</p>
    </div>
  );
}
