import type { Metadata } from "next";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from 'next/font/google'
import "./globals.css";

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

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: "400",
})

export const metadata: Metadata = {
  title: "stoicss/ui",
  description: "A minimal UI for React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.className} ${plusJakartaSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
