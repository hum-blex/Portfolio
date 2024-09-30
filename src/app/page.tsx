import Navbar from "@/components/layout/Navbar";
import AboutMe from "@/components/sections/AboutMe";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <AboutMe />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
