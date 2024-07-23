// const HomePage: React.FC = () => {} ;
import Link from "next/link";

export default function ReviewsPage() {
  console.log("[HomePage] rendering");
  return (
    <>
      <h1>Reviews</h1>
      <ul>
        <li>
          <Link href="/reviews/hollowknight">hollow knight</Link>
        </li>
        <li>
          {" "}
          <Link href="/reviews/stardew">stardew valley</Link>
        </li>
      </ul>
    </>
  );
}
// => http://localhost:3000/
