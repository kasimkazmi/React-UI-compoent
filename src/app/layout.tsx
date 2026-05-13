import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "React UI Component",
  description: "Custom UI components library",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}