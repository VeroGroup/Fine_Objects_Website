import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fine Objects | Trade Wall Art & Decorative Objects",
  description:
    "Fine Objects supplies textured wall art and decorative objects for interior designers, hospitality groups, art advisors, developers, and commercial interior projects."
};

const tailwindFallbackConfig = `
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          paper: "#F7F4EF",
          ink: "#171717",
          muted: "#6F6A63",
          line: "#DDD6CC",
          bronze: "#8A6A43",
          charcoal: "#111111"
        },
        fontFamily: {
          display: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
          sans: ['Inter', 'Arial', 'sans-serif']
        }
      }
    }
  };
`;

const fallbackComponentStyles = `
  body { margin: 0; background: #f7f4ef; color: #171717; font-family: Inter, Arial, sans-serif; }
  .button { display: inline-flex; min-height: 3rem; align-items: center; justify-content: center; border-width: 1px; padding: 0.75rem 1.5rem; text-align: center; font-size: 0.75rem; line-height: 1rem; text-transform: uppercase; letter-spacing: 0.18em; transition: all 300ms ease; }
  .button-primary { border-color: #8A6A43; background: #8A6A43; color: #F7F4EF; }
  .button-secondary { border-color: #DDD6CC; color: #171717; }
  .button-on-dark { border-color: #F7F4EF; background: #F7F4EF; color: #111111; }
  .button-dark-outline { border-color: rgba(255,255,255,0.25); color: #F7F4EF; }
  .eyebrow { margin-bottom: 1.25rem; font-size: 0.75rem; line-height: 1rem; text-transform: uppercase; letter-spacing: 0.24em; color: #8A6A43; }
  .section-title { font-family: "Cormorant Garamond", "Playfair Display", Georgia, serif; font-size: clamp(3rem, 7vw, 4.5rem); line-height: 1; color: #171717; }
  .section-copy { margin-top: 1.5rem; max-width: 42rem; font-size: 1rem; line-height: 2rem; color: #6F6A63; }
  .nav-link { transition: color 300ms ease; }
  .field { display: grid; gap: 0.5rem; font-size: 0.75rem; line-height: 1rem; text-transform: uppercase; letter-spacing: 0.18em; color: #6F6A63; }
  .field input, .field select, .field textarea { min-height: 3rem; width: 100%; border: 1px solid #DDD6CC; background: #FBF9F5; padding: 0.75rem 1rem; font-size: 1rem; line-height: 1.5rem; text-transform: none; letter-spacing: 0; color: #171717; outline: none; }
  .field textarea { min-height: 9rem; resize: vertical; }
  .fine-image { background: #DDD6CC; }
  .section-rule { border-top: 1px solid #DDD6CC; }
`;

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
        <script dangerouslySetInnerHTML={{ __html: tailwindFallbackConfig }} />
        <script src="https://cdn.tailwindcss.com" />
        <style dangerouslySetInnerHTML={{ __html: fallbackComponentStyles }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
