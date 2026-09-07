import type {
  Metadata,
  Viewport,
} from "next";

import { Montserrat } from "next/font/google";

import "./globals.css";


const montserrat = Montserrat({
  subsets: [
    "latin",
    "latin-ext",
  ],
  display: "swap",
  variable: "--font-montserrat",
});


export const metadata: Metadata = {
  title: "ENTES Ürün Ekosistemi",
  description:
    "ENTES ürünleri arasındaki teknik bağlantıları keşfedin.",
};


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className="h-full"
      data-scroll-behavior="smooth"
    >
      <body
        className={`${montserrat.className} min-h-full w-full antialiased`}
      >
        {children}
      </body>
    </html>
  );
}