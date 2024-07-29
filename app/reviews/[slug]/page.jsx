// const HomePage: React.FC = () => {} ;
import Heading from "../../../components/Heading";

export default function ReviewPage({ params: { slug } }) {
  console.log("[ReviewPage] props:", slug);
  return (
    <>
      <Heading>hallow knight</Heading>
      <img
        src="/images/hollow-knight.jpg"
        alt=""
        width="640"
        height="360"
        className="mb-2 rounded"
      />

      <p>this will be the review for hello knight</p>
    </>
  );
}
// => http://localhost:3000/
