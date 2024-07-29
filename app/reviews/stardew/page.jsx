// const HomePage: React.FC = () => {} ;
import { readFile } from "node:fs/promises";

import { marked } from "marked";
import Heading from "../../../components/Heading";
import matter from "gray-matter";

// async function getReview() {
//   const text = await readFile("./app/stardew-valley.md", "utf8");
//   // console.log("text", text);

//   const {
//     content,
//     data: { title, date, image },
//   } = matter(text);
//   const html = marked(content);
//   return html;
// }

export default async function Stardew() {
  // const review = await getReview();
  const text = await readFile("./app/stardew-valley.md", "utf8");
  // console.log("text", text);

  const {
    content,
    data: { title, date, image },
  } = matter(text);
  const html = marked(content);

  return (
    <>
      <Heading>{title}</Heading>
      <p className="italic pb-2">{date}</p>
      <img
        src={image}
        alt=""
        width="640"
        height="360"
        className="mb-2 rounded"
      />

      {/* dont do this in projects */}
      <article
        dangerouslySetInnerHTML={{ __html: html }}
        className="max-w-screen-sm prose prose-slate"
      />
    </>
  );
}
// => http://localhost:3000/
