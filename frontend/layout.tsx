import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CommandMenu from "../components/command-menu";
import SystemStatus from "../components/system-status";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Cortex Systems | Senior Fullstack Developer",
  description: "Intelligent Experiences. Secure Infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-cortex-navy font-sans text-slate-200">
        {children}
        <CommandMenu />
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2"><SystemStatus /></div>
      </body>
    </html>
  );
}