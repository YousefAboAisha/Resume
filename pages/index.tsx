import SkillsCards from "../Containers/Home/SkillsCards";
import CV from "../Containers/Home/CV";
import Hero from "../Containers/Home/Hero";
import Contact from "../Containers/Home/Contact";
import Landing from "../Components/Landing";

export default function Home() {
  return (
    <main className="mb-24">
      <Landing
        hasBlurColors={true}
        width={450}
        height={450}
        mainImg={"/landing.png"}
        decorateImage1={"/rocket.png"}
        decorateImage2={"/message.png"}
        normalHeading={"WELLCOME TO MY"}
        highlightHeading={"PORTFOLIO"}
      />

      <SkillsCards />

      <CV />

      <Hero />

      <Contact />
    </main>
  );
}
