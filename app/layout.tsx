import type { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="flex flex-col px-4 py-2 min-h-screen">
        <header style={{ border: "solid blue 1px" }}>
          <nav>
            <ul className="flex gap-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/reviews">Reviews</Link>
              </li>
              <li>
                <Link href="/about" prefetch={false}>
                  about
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="grow py-3">{children}</main>
        <footer className="border-t py-3 text-center text-xs">
          footer game data and images of{" "}
          <a href="https://rawg.io" target="_blank">
            rawg
          </a>
        </footer>
      </body>
    </html>
  );
}
