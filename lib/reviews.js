import { readFile } from "node:fs/promises";
import { marked } from "marked";
import matter from "gray-matter";

export async function getReview(slug) {
  const text = await readFile(`./app/${slug}.md`, "utf8");

  const {
    content,
    data: { title, date, image },
  } = matter(text);
  const body = marked(content, { headIds: false, mangle: false });
  return { title, date, image, body };
}
