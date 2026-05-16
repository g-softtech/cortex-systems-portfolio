import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CommandMenu from "../components/command-menu";
import SystemStatus from "../components/system-status";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://cortexsystems.io"),
  title: {
    default: "Cortex Systems | Senior Fullstack Developer",
    template: "%s | Cortex Systems",
  },
  description: "Intelligent Experiences. Secure Infrastructure.",
  keywords: ["Senior Fullstack Developer", "Product Engineer", "Next.js", "React", "Node.js", "TypeScript", "Software Architecture"],
  authors: [{ name: "Cortex Systems" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Cortex Systems | Senior Fullstack Developer",
    description: "Intelligent Experiences. Secure Infrastructure. Building high-velocity, constraint-driven digital products.",
    siteName: "Cortex Systems",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans min-h-screen flex flex-col">
        {children}
        <CommandMenu />
        <div className="fixed bottom-6 right-6 z-50">
          <SystemStatus />
        </div>
        <footer className="w-full text-center py-6 text-xs font-mono text-slate-500">
          <p>
            Developed by <span className="text-[#D4AF37]">Cortex Systems</span> &copy; 2026
          </p>
        </footer>
      </body>
    </html>
  );
}