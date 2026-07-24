import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/data/site";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: `${site.company} | Excavation & Site Work`,
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}
        <Analytics />
      </body>
    </html>
  );
}
