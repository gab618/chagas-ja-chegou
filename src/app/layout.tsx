import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { differenceInCalendarDays } from "date-fns";
import { TARGET_DATE } from "../utils/constants";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const today = new Date();
const daysRemaining = differenceInCalendarDays(TARGET_DATE, today);

export const metadata: Metadata = {
  title: "Chagas já chegou?",
  description: `Faltam ${daysRemaining} dias para o Chagas chegar!`,
  openGraph: {
    title: "Chagas já chegou?",
    description: `Faltam ${daysRemaining} dias para o Chagas chegar!`,
    url: "https://chagas-ja-chegou.vercel.app",
    siteName: "Chagas Countdown",
    images: [
      {
        url: "/favicon.ico",
        width: 64,
        height: 64,
        alt: "Ícone de explosão",
      },
    ],
    locale: "pt_BR",
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
        {children}
      </body>
    </html>
  );
}
