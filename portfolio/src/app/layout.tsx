import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Luke Bowles",
    template: "%s | Luke Bowles",
  },
  description:
    "Product Architect and Software Engineer specializing in blockchain, DeFi, and web3 technologies.",
  keywords: [
    "Luke Bowles",
    "Product Architect",
    "Software Engineer",
    "Blockchain Developer",
    "DeFi",
    "Web3",
    "React",
    "Next.js",
    "TypeScript",
    "Software Engineer",
  ],
  authors: [{ name: "Luke Bowles" }],
  creator: "Luke Bowles",
  metadataBase: new URL("https://www.luko.co.za"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.luko.co.za",
    title: "Luke Bowles - Product Architect & Software Engineer",
    description:
      "Product Architect and Software Engineer specializing in blockchain, DeFi, and web3 technologies.",
    siteName: "Luke Bowles",
    images: [
      {
        url: "/img/og.png",
        width: 1200,
        height: 630,
        alt: "Luke Bowles - Product Architect & Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luke Bowles - Product Architect & Software Engineer",
    description:
      "Product Architect and Software Engineer specializing in blockchain, DeFi, and web3 technologies.",
    images: ["/img/og.png"],
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
  icons: {
    icon: "/favicon.ico",
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
