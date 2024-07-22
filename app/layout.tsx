import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <header style={{ border: "solid blue 1px" }}>[header]</header>
        <main>{children}</main>
        <footer style={{ border: "solid blue 1px" }}>[footer]</footer>
      </body>
    </html>
  );
}
