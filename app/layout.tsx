import type { Metadata } from "next";
import { Lora, DM_Sans } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Integrity Acquisitions — Business Buying & Investing",
  description:
    "We acquire and build profitable businesses through win/win partnerships. Canada-based, operating worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${dmSans.variable}`}>
      <body
        style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}
        className="min-h-screen flex flex-col antialiased"
      >
        {children}
      </body>
    </html>
  );
}
