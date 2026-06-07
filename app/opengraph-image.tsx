import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Interly — Trouve ta communauté avant même d'arriver";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "linear-gradient(135deg, #F5F6F9 0%, #E9F0FF 50%, #E1F7EF 100%)",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: 18,
              background:
                "linear-gradient(150deg, #2F6BF6 0%, #1C49C6 55%, #18C08A 130%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 24px rgba(47,107,246,0.30)",
            }}
          >
            <div
              style={{
                width: 26,
                height: 26,
                borderRadius: "50%",
                border: "3px solid white",
              }}
            />
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 800,
              color: "#141925",
              letterSpacing: -1,
            }}
          >
            Interly
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              color: "#141925",
              letterSpacing: -3,
              lineHeight: 1.05,
              maxWidth: 1000,
            }}
          >
            Trouve ta communauté{" "}
            <span
              style={{
                background:
                  "linear-gradient(120deg, #2F6BF6 0%, #18C08A 100%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              avant même
            </span>{" "}
            d'arriver.
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              color: "#545E70",
              maxWidth: 900,
            }}
          >
            La communauté des étudiant·es en mobilité internationale · 184 villes
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 22,
            fontWeight: 700,
            color: "#2453D4",
          }}
        >
          interly.io
        </div>
      </div>
    ),
    { ...size }
  );
}
