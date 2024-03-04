import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="bg-orange-100 p-8">
          <Link className="no-underline mr-3" href="/">
            Home
          </Link>
          <Link className="no-underline mr-3" href="/list">
            List
          </Link>
          <Link className="no-underline mr-3" href="/cart">
            Cart
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
}