import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const SITE_URL = "https://interly.io";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Interly — Trouve ta communauté avant même d'arriver",
  description:
    "Interly connecte les étudiant·es en mobilité internationale dans la même ville, aux mêmes dates. Pour que personne n'arrive seul·e.",
  keywords: [
    "Erasmus",
    "mobilité internationale",
    "étudiants",
    "communauté",
    "exchange",
    "université",
  ],
  authors: [{ name: "Interly" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "Interly",
    title: "Interly — Trouve ta communauté avant même d'arriver",
    description:
      "La communauté des étudiant·es en mobilité internationale. Rejoins la beta — lancement rentrée 2026.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Interly — communauté étudiante en mobilité",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interly — Trouve ta communauté avant même d'arriver",
    description:
      "La communauté des étudiant·es en mobilité internationale. Rejoins la beta.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#2F6BF6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={jakarta.variable}>
      <body>{children}</body>
    </html>
  );
}
