// const HomePage: React.FC = () => {} ;
import Link from "next/link";
import Heading from "../../components/Heading.jsx";
import { getReviews } from "../../lib/reviews.js";

export default async function ReviewsPage() {
  const reviews = await getReviews();
  // console.log("[reviewspage reviews]", reviews);
  console.log("reviewslug", reviews.slug);

  return (
    <>
      <Heading>Reviews</Heading>
      <ul className="flex flex-row flex-wrap gap-3 ">
        {reviews.map((review) => (
          <li
            key={review.slug}
            className="border w-80 rounded shadow hover:shadow-xl bg-white"
          >
            <Link href={`/reviews/${review.slug}`}>
              {review.image}
              <img
                src={review.image}
                alt=""
                width="320"
                height="180"
                className="rounded-top"
              />
              <h2>{review.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
// => http://localhost:3000/
