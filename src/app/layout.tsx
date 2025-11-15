import type { Metadata } from "next";
import localFont from "next/font/local";
import "antd/dist/reset.css";
import "./globals.scss";

const Geist = localFont({
  src: [
    {
      path: "../../public/fonts/Geist-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-geist",
});

const GeistMono = localFont({
  src: [
    {
      path: "../../public/fonts/GeistMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-geist-mono",
});


export const metadata: Metadata = {
  title: "GitHub Users",
  description: "Developed by ELdar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${Geist.variable} ${GeistMono.variable}`}>
      <body>
        <main className="page">{children}</main>
      </body>
    </html>
  );
}
