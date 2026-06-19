import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fine Objects | Trade Wall Art & Decorative Objects",
  description:
    "Fine Objects supplies tactile, project-ready wall art and decorative objects for interior designers, hospitality groups, art advisors, developers, and commercial interiors."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
