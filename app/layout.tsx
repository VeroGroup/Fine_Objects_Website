import type { Metadata } from "next";
import "./site.css";

export const metadata: Metadata = {
  title: "Fine Objects | Trade Wall Art & Decorative Objects",
  description:
    "Fine Objects supplies retail-ready wall art and decorative objects for national retailers, home furnishing chains, warehouse clubs, off-price groups, wholesalers, and import programs."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
