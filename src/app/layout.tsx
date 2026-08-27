/* import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "ENTES Ürün Ekosistemi",
  description:
    "ENTES ürünleri arasındaki teknik bağlantıları keşfedin.",
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
      <body className="min-h-full antialiased">
        {children}
      </body>
    </html>
  );
} */

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "ENTES Ürün Ekosistemi",
  description:
    "ENTES ürünleri arasındaki teknik bağlantıları keşfedin.",
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
        className={`${montserrat.className} min-h-full antialiased`}
      >
        {children}
      </body>
    </html>
  );
}