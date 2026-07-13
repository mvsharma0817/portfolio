import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BackgroundGrid } from "@/components/ui/BackgroundGrid";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mihir Sharma | Premium Flutter Developer Portfolio",
  description: "Professional Flutter Developer passionate about building beautiful, responsive, and scalable mobile applications with clean architecture and Firebase integrations.",
  openGraph: {
    title: "Mihir Sharma | Flutter Developer Portfolio",
    description: "Professional Flutter Developer passionate about building beautiful, responsive, and scalable mobile applications with clean architecture.",
    type: "website",
    locale: "en_US",
    siteName: "Mihir Sharma Portfolio",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased lenis-smooth`}
    >
      <body className="min-h-full flex flex-col bg-neutral-950 text-neutral-100 overflow-x-hidden selection:bg-blue-500/20 selection:text-white">
        <SmoothScrollProvider>
          {/* Custom Glowing Cursor Overlay */}
          <CustomCursor />
          
          {/* Animated Background Canvas */}
          <BackgroundGrid />
          
          {/* Sticky Responsive Header */}
          <Header />
          
          {/* Main App Content */}
          <main className="flex-grow w-full relative z-10">
            {children}
          </main>
          
          {/* Footer */}
          <Footer />
          
          {/* Sonner Toast Controller */}
          <Toaster theme="dark" position="bottom-right" richColors />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
