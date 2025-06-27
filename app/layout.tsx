import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/layout/navigation";

export const metadata: Metadata = {
  title: "Starbornlab Kenya",
  description: "An application for displaying starbornlab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
