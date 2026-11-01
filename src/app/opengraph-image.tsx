import { ImageResponse } from "next/og";

export const alt = "Aditya Thodsare — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#101411", color: "#f2f5ef", fontFamily: "sans-serif" }}>
    <div style={{ color: "#82e6aa", fontSize: 28, fontFamily: "monospace" }}>&gt; portfolio.init — Pune, India</div>
    <div style={{ fontSize: 76, fontWeight: 700, marginTop: 28 }}>Aditya Thodsare</div>
    <div style={{ color: "#82e6aa", fontSize: 38, marginTop: 20 }}>Full Stack Developer</div>
    <div style={{ fontSize: 26, marginTop: 18 }}>Java · Spring Boot · Next.js · AI dashboards · IoT</div>
  </div>, size);
}
