import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono, Sacramento } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const sacramento = Sacramento({
  variable: "--font-sacramento",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "Atiphan C.",
  description:
    "Software developer at the CP Leadership Institute, building human-centered approaches to AI adoption. One Young World 2026 application.",
  openGraph: {
    title: "Atiphan C.",
    description:
      "Software developer at the CP Leadership Institute, building human-centered approaches to AI adoption.",
    images: ["/images/avatar.webp"],
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
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${sacramento.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
