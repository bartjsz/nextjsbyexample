import type { ReactNode } from "react";
import Link from "next/link";

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <header style={{ border: "solid blue 1px" }}>
          <nav>
            <ul>
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
        <main>{children}</main>
        <footer style={{ border: "solid blue 1px" }}>[footer]</footer>
      </body>
    </html>
  );
}
