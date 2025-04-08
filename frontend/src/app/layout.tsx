import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dM_Sans = DM_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "800", "900", "1000"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Upwork Task",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dM_Sans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
