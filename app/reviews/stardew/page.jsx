// const HomePage: React.FC = () => {} ;
import { promises as fs } from "fs";
import Heading from "../../../components/Heading";

export default async function Stardew() {
  const text = await fs.readFile(
    process.cwd() + "/app/stardew-valley.md",
    "utf8"
  );

  return (
    <>
      <Heading>stardew valley</Heading>
      <img
        src="/images/stardew-valley.jpg"
        alt=""
        width="640"
        height="360"
        className="mb-2 rounded"
      />
      <p>{text}</p>
    </>
  );
}
// => http://localhost:3000/
