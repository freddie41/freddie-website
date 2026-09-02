import type { Metadata } from "next";
import "./globals.css";

// Keep site-wide metadata and the global stylesheet at the App Router root.
export const metadata: Metadata = {
  title: "Federico Cuelho Lariau | Software Engineering & QA Automation.",
  description:
    "Software engineering, QA automation, client-facing solutions, and technical demos by Federico Cuelho Lariau.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // PortfolioPage updates the document language after a client-side switch.
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
