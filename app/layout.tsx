import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: "400",
});

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
        className={`${plusJakartaSans.className} ${plusJakartaSans.className} antialiased selection:bg-teal-100 selection:text-teal-900 scroll-smooth`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
