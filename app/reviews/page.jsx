// const HomePage: React.FC = () => {} ;
import Link from "next/link";
import Heading from "../../components/Heading";

export default function ReviewsPage() {
  console.log("[HomePage] rendering");
  return (
    <>
      <Heading>Reviews</Heading>
      <ul className="flex flex-col gap-3">
        <li className="border w-80 rounded shadow hover:shadow-xl bg-white">
          <Link href="/reviews/hollowknight">
            <img
              src="/images/hollow-knight.jpg"
              alt=""
              width="320"
              height="180"
              className="rounded-top"
            />
            <h2>hollow knight</h2>
          </Link>
        </li>
        <li className="border w-80 rounded shadow hover:shadow-xl bg-white">
          <Link href="/reviews/stardew">
            <img
              src="/images/stardew-valley.jpg"
              alt=""
              width="320"
              height="180"
              className="rounded-top"
            />
            <h2>stardew valley</h2>
          </Link>
        </li>
      </ul>
    </>
  );
}
// => http://localhost:3000/
