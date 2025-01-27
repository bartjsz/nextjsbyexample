import { readdir, readFile } from "node:fs/promises";
import { marked } from "marked";
import matter from "gray-matter";

export async function getReview(slug) {
  const text = await readFile(`./content/reviews/${slug}.md`, "utf8");

  const {
    content,
    data: { title, date, image },
  } = matter(text);
  const body = marked(content, { headIds: false, mangle: false });
  return { slug, title, date, image, body };
}

export async function getFeaturedReview() {
  const reviews = await getReviews();
  return reviews[0];
}

export async function getReviews() {
  const slugs = await getSlugs();
  const reviews = [];
  for (const slug of slugs) {
    const review = await getReview(slug);
    reviews.push(review);
  }

  // most current first so its reverse order from post
  reviews.sort((a, b) => b.date.localeCompare(a.date));

  // to have the oldest post first
  // reviews.sort((a, b) => a.date.localeCompare(b.date));
  return reviews;
}

// todo refacto because map returns last index as undefined use filter instead
export async function getSlugs() {
  const files = await readdir("./content/reviews");
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length));
}
