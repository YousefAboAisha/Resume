import SkillsCards from "../Containers/Home/SkillsCards"
import CV from "../Containers/Home/CV"
import Hero from "../Containers/Home/Hero"
import Contact from "../Containers/Home/Contact"
import Landing from "../Containers/Home/Landing"

export default function Home() {
  return (
    <main className="mb-24">
      <Landing />

      <SkillsCards />

      <CV />

      <Hero />

      <Contact />
    </main>
  )
}
