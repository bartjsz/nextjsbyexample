import type { ReactNode } from "react";
import Link from "next/link";
import NavBar from "../components/NavBar";

import "./globals.css";

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="bg-orange-50 flex flex-col px-4 py-2 min-h-screen">
        <header style={{ border: "solid blue 1px" }}>
          <NavBar />
        </header>
        <main className="grow py-3">{children}</main>
        <footer className="border-t py-3 text-center text-xs">
          footer game data and images of{" "}
          <a
            href="https://rawg.io"
            target="_blank"
            className="text-orange-800 hover:underline"
          >
            rawg
          </a>
        </footer>
      </body>
    </html>
  );
}
