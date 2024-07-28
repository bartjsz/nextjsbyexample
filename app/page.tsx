// const HomePage: React.FC = () => {} ;
import Heading from "../components/Heading";
//todo @ import not working module path alias tsconfig.json or jsconfig.json
// but create next app tool will automatically config path for you

export default function HomePage() {
  console.log("[HomePage] rendering");
  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p>only indie gamer stuff</p>
    </>
  );
}
// => http://localhost:3000/
