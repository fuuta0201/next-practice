import Hero from "./components/features/Hero";
import About from "./components/features/About";
import Works from "./components/features/Works";

export default function Home() {
  return (
    <main className="pt-[60px]">
      <Hero />
      <About />
      <Works />
    </main>
  );
}
