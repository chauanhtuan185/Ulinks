import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TopLoader from "@/components/layouts/toploader";
import { Providers } from "@/components/wagmi-providers";
import { useEffect } from 'react';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
      iframe.setAttribute('sandbox', 'allow-forms allow-scripts allow-same-origin');
    });
  }, []);
  return (
    <html lang="en">
      <head>
        <meta name="twitter:card" content="player" />
        <meta name="twitter:site" content="@kayx86" />
        <meta name="twitter:title" content="Demo Mulinks" />
        <meta name="twitter:description" content="Mint your NFT in Unique" />
        <meta
          name="twitter:player"
          content="https://ulinks-dun.vercel.app/assetlinks"
        />
        <meta name="twitter:player:width" content="360" />
        <meta name="twitter:player:height" content="560" />
        <meta
          name="twitter:image"
          content="https://cdn.coin68.com/images/20231216051438-935aa38b-540f-4f6b-9e60-64394a5c8642-194.jpg"
        />
        <meta property="og:url" content="https://ulinks-dun.vercel.app/assetlinks" />
        <meta property="og:title" content="test" />
        <meta property="og:description" content="test" />
        <meta property="og:image" content="https://cdn.coin68.com/images/20231216051438-935aa38b-540f-4f6b-9e60-64394a5c8642-194.jpg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopLoader />
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  );
}
