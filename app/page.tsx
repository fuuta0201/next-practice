import Hero from "./components/features/Hero";
import About from "./components/features/About";
import Works from "./components/features/Works";
import Skills from "./components/features/Skills";

export default function Home() {
  return (
    <main className="pt-[60px] relative">
      <Hero />
      <div id="about" className="pt-[100px] mt-[-100px]"></div>
      <About />
      <div id="works" className="pt-[100px] mt-[-100px]"></div>
      <Works />
      <div id="skills" className="pt-[100px] mt-[-100px]"></div>
      <Skills />
    </main>
  );
}
