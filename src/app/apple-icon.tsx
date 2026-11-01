import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 36, background: "#101411", color: "#82e6aa", fontFamily: "monospace", fontSize: 82, fontWeight: 700 }}>AT</div>, size);
}
