import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oğuzhan Çaldıran - Dijital İçerik & Sosyal Medya Uzmanı",
  description:
    "Markalara otantik bağlantılar kurma ve veri odaklı içerik stratejileriyle üssel büyüme sağlama konusunda uzman dijital pazarlama danışmanı.",
  keywords:
    "sosyal medya pazarlama, içerik stratejisi, marka büyümesi, dijital pazarlama, sosyal medya danışmanı, video prodüksiyon, web tasarım",
  authors: [{ name: "Oğuzhan Çaldıran" }],
  creator: "Oğuzhan Çaldıran",
  metadataBase: new URL("https://oguzhancaldiran.com"),
  openGraph: {
    title: "Oğuzhan Çaldıran - Dijital İçerik & Sosyal Medya Uzmanı",
    description:
      "Markalara otantik bağlantılar kurma ve veri odaklı içerik stratejileriyle üssel büyüme sağlama konusunda uzman dijital pazarlama danışmanı.",
    url: "https://oguzhancaldiran.com",
    siteName: "Oğuzhan Çaldıran",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Oğuzhan Çaldıran - Dijital İçerik & Sosyal Medya Uzmanı",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oğuzhan Çaldıran - Dijital İçerik & Sosyal Medya Uzmanı",
    description:
      "Markalara otantik bağlantılar kurma ve veri odaklı içerik stratejileriyle üssel büyüme sağlama konusunda uzman dijital pazarlama danışmanı.",
    images: ["/og-image.jpg"],
    creator: "@oguzhancaldiran",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
