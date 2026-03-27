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
    "Video prodüksiyon, sosyal medya yönetimi, web tasarım ve performans pazarlama alanlarında uçtan uca hizmet sunarak markaların sürdürülebilir büyümesine katkı sağlar.",
  keywords:
    "video prodüksiyon, video kurgu, sosyal medya yönetimi, içerik stratejisi, web tasarım, performans pazarlama, dijital içerik, marka büyümesi",
  authors: [{ name: "Oğuzhan Çaldıran" }],
  creator: "Oğuzhan Çaldıran",
  metadataBase: new URL("https://oguzhancaldiran.com"),
  openGraph: {
    title: "Oğuzhan Çaldıran - Dijital İçerik & Sosyal Medya Uzmanı",
    description:
      "Video prodüksiyon, sosyal medya yönetimi, web tasarım ve performans pazarlama alanlarında uçtan uca hizmet sunarak markaların sürdürülebilir büyümesine katkı sağlar.",
    url: "https://oguzhancaldiran.com",
    siteName: "Oğuzhan Çaldıran",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
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
      "Video prodüksiyon, sosyal medya yönetimi, web tasarım ve performans pazarlama alanlarında uçtan uca hizmet sunarak markaların sürdürülebilir büyümesine katkı sağlar.",
    images: ["/favicon.png"],
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
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
