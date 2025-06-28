import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SparkHer - Inspiring the Next Generation of Female Innovators",
  description: "Sparking passion for robotics and STEM in young women through powerful stories of female pioneers and innovators in technology.",
  keywords: ["SparkHer", "female innovators", "women in STEM", "robotics", "female roboticists", "STEM education", "women in technology", "inspiration", "young girls", "engineering"],
  authors: [{ name: "SparkHer Team" }],
  openGraph: {
    title: "SparkHer - Inspiring the Next Generation of Female Innovators",
    description: "Sparking passion for robotics and STEM in young women through powerful stories and shared journeys",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
