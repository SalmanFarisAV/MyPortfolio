import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollVideoCanvas from "./components/ScrollVideoCanvas";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Salman Faris A V | Software Development Engineer",
  description: "Portfolio of Salman Faris A V, Software Development Engineer specializing in Flutter & Web Development.",
  manifest: "/portfolio/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth no-scrollbar">
      <body className={`${inter.variable} antialiased selection:bg-cyan-500/30 selection:text-cyan-100`}>
        <ScrollVideoCanvas />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
