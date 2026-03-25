import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
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
  title: "Alex.Dev | Portfolio",
  description: "Senior Full Stack Engineering Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative text-foreground antialiased bg-black">
        {/* Background Layer */}
        <div className="fixed inset-0 z-[-1]">
          <div className="absolute inset-0 bg-[url('/bg-network.jpg')] bg-cover bg-center bg-no-repeat opacity-40 mix-blend-screen"></div>
          {/* Subtle gradient to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background/95"></div>
        </div>
        
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
