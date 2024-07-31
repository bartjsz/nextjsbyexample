// const HomePage: React.FC = () => {} ;
import Link from "next/link";
import Heading from "../components/Heading";
//todo @ import not working module path alias tsconfig.json or jsconfig.json
// but create next app tool will automatically config path for you

import { getFeaturedReview } from "../lib/reviews";

// sets meta tag <title></title> in the <head> of the document html
// <meta name="description" content="Only the best Indie, games"></meta>
// https://nextjs.org/learn/dashboard-app/adding-metadata
export const metadata = {
  title: "Indie Gamer",
  description: "Only the best Indie, games",
};

export default async function HomePage() {
  const review = await getFeaturedReview();
  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className="pb-3">only indie gamer stuff</p>
      <div
        className="bg-white border rounded shadow w-80
                      hover:shadow-xl sm:w-full"
      >
        <Link
          href={`/reviews/${review.slug}`}
          className="flex flex-col sm:flex-row"
        >
          <img
            src={`${review.image}`}
            alt=""
            width="320"
            height="180"
            className="rounded-t sm:rounded-l sm:rounded-r-none"
          />
          <h2 className="font-orbitron font-semibold py-1 text-center sm:px-2">
            {review.title}
          </h2>
        </Link>
      </div>
    </>
  );
}
// => http://localhost:3000/
