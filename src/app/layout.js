import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Space_Grotesk({ variable: "--font-sans", subsets: ["latin"] });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"] });

const title = "Aditya Thodsare | Software Engineer | AI and Cloud Architecture in Pune";
const description = "Aditya Thodsare is a software engineer in Pune building AI-powered products, cloud architecture, Java Spring Boot microservices and Next.js apps.";
const canonical = "https://adityathodsare.vercel.app/";

export const metadata = {
  metadataBase: new URL(canonical),
  title,
  description,
  alternates: { canonical },
  robots: { index: true, follow: true },
  openGraph: { type: "website", locale: "en_IN", url: canonical, title, description, siteName: "Aditya Thodsare", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Aditya Thodsare — Software Engineer" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
  icons: { icon: "/favicon.ico", apple: "/apple-icon" },
};

export const viewport = { themeColor: "#101411" };

export default function RootLayout({ children }) {
  return <html lang="en" className={`${sans.variable} ${mono.variable}`}><body>{children}</body></html>;
}
