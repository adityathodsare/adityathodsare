import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export const metadata = {
  title: "Aditya Thodsare | Full Stack MERN Developer",
  description:
    "Full Stack MERN Developer specializing in scalable web applications using React, Node.js, Express, MongoDB, and modern frontend tools.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
