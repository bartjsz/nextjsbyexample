// const HomePage: React.FC = () => {} ;
import Heading from "../../../components/Heading";

export default function ReviewPage({ params: { slug } }) {
  // console.log("[ReviewPage] props:", slug);
  return (
    <>
      <Heading>hellblade</Heading>
      <img
        src="/images/hellblade.jpg"
        alt=""
        width="640"
        height="360"
        className="mb-2 rounded"
      />
      <p>this will be the review for hellblade</p>
    </>
  );
}
// => http://localhost:3000/
