import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import DSA from "./sections/Problem_solving";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* Hero stays standalone */}
      <Hero />

      {/* Main Sections */}
      <div className="flex flex-col gap-12">
        <Section>
          <About />
        </Section>

        <Section>
          <Skills />
        </Section>

        <Section>
          <DSA />
        </Section>

        <Section id="projects">
          <Projects />
        </Section>

        <Section>
          <Contact />
        </Section>
      </div>
    </main>
  );
}

function Section({ id, children }) {
  return (
    <section id={id} className="section relative">
      {/* subtle divider for visual rhythm */}
      <div className="absolute inset-x-0 -top-12 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      {children}
    </section>
  );
}

export default App;
