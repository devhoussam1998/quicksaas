import { Footer, Header } from "@/components/layouts";
import { ThemeProvider } from "@/components/providers";
import { Toaster } from "@/components/ui/sonner";
import { env } from "@/config/env";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import * as React from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(`${env.NEXT_PUBLIC_APP_URL}`),
  title: {
    template: `%s | ${env.NEXT_PUBLIC_APP_NAME}`,
    default: `${env.NEXT_PUBLIC_APP_NAME}`,
  },
  description: "",
  keywords: ["", "", "", "", ""],
  openGraph: {
    title: `${env.NEXT_PUBLIC_APP_NAME}`,
    description: "",
    url: `${env.NEXT_PUBLIC_APP_URL}`,
    siteName: `${env.NEXT_PUBLIC_APP_NAME}`,
    images: [
      {
        url: "https://dummyimage.com/800x600.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://dummyimage.com/1800x1600.png",
        width: 1800,
        height: 1600,
        alt: "",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      {
        rel: "icon",
        type: "image/png",
        url: "/images/favicons/light.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        rel: "icon",
        type: "image/png",
        url: "/images/favicons/dark.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    shortcut: ["/shortcut-icon.png"],
    apple: "/apple-icon.png",
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon-precomposed.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${env.NEXT_PUBLIC_APP_NAME}`,
    description: "",
    siteId: "",
    creator: "",
    creatorId: "",
    images: ["https://dummyimage.com/3357x2073.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster richColors closeButton position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
