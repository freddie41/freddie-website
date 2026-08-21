import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Federico Cuelho | Software Engineer & QA Automation Specialist",
  description:
    "Software engineering, QA automation, client-facing solutions, and technical demos by Federico Cuelho.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
