// const HomePage: React.FC = () => {} ;
import Heading from "../../../components/Heading";
import ShareLinkButton from "../../../components/ShareLinkButton";
import { getReview, getSlugs } from "../../../lib/reviews";

// generateStaticParams to build static site generate httml
// get static pages even when using a dynamic root
export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug } }) {
  const review = await getReview(slug);
  return {
    title: review.title,
  };
}

export default async function ReviewPage({ params: { slug } }) {
  const review = await getReview(slug);
  console.log("[ReviewPage] rendering", slug);

  return (
    <>
      <Heading>{review.title}</Heading>
      <div className="flex gap-3 items-baseline">
        <p className="italic pb-2">{review.date}</p>
        <ShareLinkButton />
      </div>

      <img
        src={review.image}
        alt=""
        width="640"
        height="360"
        className="mb-2 rounded"
      />
      {/* dont do this in projects */}
      <article
        dangerouslySetInnerHTML={{ __html: review.body }}
        className="max-w-screen-sm prose prose-slate"
      />
    </>
  );
}
// => http://localhost:3000/
