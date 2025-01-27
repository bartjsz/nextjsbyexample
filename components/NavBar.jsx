import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <ul className="flex gap-2">
        <li className="grow">
          <Link href="/" className="text-orange-800  hover:underline">
            Indie gamer
          </Link>
        </li>
        <li>
          <Link href="/" className="text-orange-800 hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/reviews" className="text-orange-800 hover:underline">
            Reviews
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-orange-800 hover:underline"
            prefetch={false}
          >
            about
          </Link>
        </li>
      </ul>
    </nav>
  );
}
