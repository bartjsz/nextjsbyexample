// const HomePage: React.FC = () => {} ;
import { promises as fs } from "fs";
import { marked } from "marked";
import Heading from "../../../components/Heading";
import matter from "gray-matter";

async function getReview() {
  const text = await fs.readFile(
    process.cwd() + "/app/stardew-valley.md",
    "utf8"
  );
  const body = marked(text, { headerIds: false, mangle: false });
  const title = "stardew valley";
  const date = new Date().toDateString();
  const image = "/images/stardew-valley.jpg"
  return {title, date, image, body}
}

export default async function Stardew() {
  const review = await getReview();

  return (
    <>
      <Heading>{review.title}</Heading>
      <p className="italic pb-2">{review.date}</p>
      <img
        src={review.image}
        alt=""
        width="640"
        height="360"
        className="mb-2 rounded"
      />

      {/* dont do this in projects */}
      <article
        dangerouslySetInnerHTML={{
          __html: review.body,
        }}
        className="max-w-screen-sm prose prose-slate"
      />
    </>
  );
}
// => http://localhost:3000/
