import type { ReactNode } from "react";
import Link from "next/link";
import NavBar from "../components/NavBar";
import { orbitron } from "./fonts";

import "./globals.css";

interface LayoutProps {
  children: ReactNode;
}

// sets meta tag <title></title> in the <head> of the document html
// <meta name="description" content="Only the best Indie, games"></meta>
// https://nextjs.org/learn/dashboard-app/adding-metadata
// export const metadata = {
//   title: "Indie Gamer",
//   // description: "Only the best Indie, games",
// };

// %s is a placeholder that will be replaced by title
export const metadata = {
  // default: "About | Indie Gamer",
  // template: "%s | Indie Gamer",
  title: "Indie Gamer",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={orbitron.variable}>
      <body className="bg-orange-50 flex flex-col px-4 py-2 min-h-screen">
        <header style={{ border: "solid blue 1px" }}>
          <NavBar />
        </header>
        <main className="grow py-3">{children}</main>
        <footer className="text-slate-500 border-t py-3 text-center text-xs">
          footer game data and images of{" "}
          <a
            href="https://rawg.io"
            target="_blank"
            className="text-orange-800  hover:underline"
          >
            rawg
          </a>
        </footer>
      </body>
    </html>
  );
}
