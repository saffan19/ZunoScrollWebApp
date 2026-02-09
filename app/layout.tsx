import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zuno Scroll - Transform Doom Scrolling into Meaningful Learning",
  description:
    "Replace mindless scrolling with personalized, bite-sized learning content. Create custom learning views, track your progress, and turn your scrolling habit into knowledge growth.",
  keywords:
    "learning app, personalized learning, bite-sized learning, educational app, knowledge growth, learning tracker, adaptive learning, scroll learning",
  authors: [{ name: "Zuno Scroll" }],
  creator: "Zuno Scroll",
  publisher: "Zuno Scroll",
  openGraph: {
    title: "Zuno Scroll - Transform Doom Scrolling into Meaningful Learning",
    description:
      "Replace mindless scrolling with personalized, bite-sized learning content.",
    url: "https://zunoscroll.com",
    siteName: "Zuno Scroll",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zuno Scroll - Transform Doom Scrolling into Meaningful Learning",
    description:
      "Replace mindless scrolling with personalized, bite-sized learning content.",
    creator: "@zunoscroll",
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
