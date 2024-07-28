// const HomePage: React.FC = () => {} ;
import Link from "next/link";
import Heading from "../../components/Heading";

export default function ReviewsPage() {
  console.log("[HomePage] rendering");
  return (
    <>
      <Heading>Reviews</Heading>
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
