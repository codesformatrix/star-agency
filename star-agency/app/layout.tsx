import type { Metadata } from "next";
import { Fraunces, Syne } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["700", "800"],
  style: ["italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "STAR Web Design Agency — Jaipur",
  description:
    "We build premium websites for architects, wedding planners, and Indian businesses ready to grow.",
  openGraph: {
    title: "STAR Web Design Agency",
    description: "Premium web design for Indian businesses.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${syne.variable}`}>
      <body>{children}</body>
    </html>
  );
}
