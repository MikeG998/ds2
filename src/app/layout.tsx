import type { Metadata } from "next";
import { Montserrat, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "DealSurge.co - Lead Generation, Engineered for Growth",
  description: "Proven systems, real partnership, and leads that actually close. With modular, transparent solutions and a partner-first approach, we deliver leads that convert.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${ibmPlexSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
