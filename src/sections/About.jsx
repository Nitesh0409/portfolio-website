import { motion } from "framer-motion";

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const highlights = [
  "problem-solving",
  "clean and readable code",
  "backend systems",
  "fundamentals",
];

const About = () => {
  const paragraphs = [
    "I enjoy working on problems that require structured thinking and patience. Whether it’s designing a backend flow or breaking down an algorithm, I prefer approaching tasks step by step rather than jumping to quick solutions.",

    "When building projects, I focus on writing clean and readable code that is easy to maintain. I like understanding why a solution works, not just making it work. This mindset has helped me improve my problem-solving ability and code quality over time.",

    "I actively work on strengthening my fundamentals and apply them through backend systems and small experiments. I believe steady effort and consistency matter more than short bursts of productivity, and I try to reflect that in how I learn and build.",
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group flex justify-center md:justify-start"
        >
          <div
            className="absolute -bottom-6 -right-6 w-105 h-130 rounded-2xl
            bg-linear-to-tr from-accent/40 via-secondary/30 to-accent/20 
            blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
          />

          <div className="aspect-4/5 max-w-95 relative rounded-2xl overflow-hidden border border-gray-800 shadow-black/30 shadow-lg transition-transform duration-500 group-hover:scale-105">
            <img
              src="/profile.png"
              alt="Nitesh"
              className="w-full h-full object-cover transition-all duration-700"
            />

            <div className="absolute inset-0 rounded-2xl border border-accent/30 opacity-0 group-hover:opacity-100 shadow-[0_0_25px_rgba(255,165,0,0.2)] transition-all duration-700 pointer-events-none" />
          </div>
        </motion.div>

        {/* Right Side: Story */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4">
            About
            <div className="h-px bg-gray-800 grow" />
          </h2>

          <motion.div
            className="space-y-6 text-gray-400 text-lg leading-relaxed"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                variants={paragraphVariants}
                transition={{ delay: i * 0.2 }}
                dangerouslySetInnerHTML={{
                  __html: highlights.reduce((text, word) => {
                    const regex = new RegExp(`(${word})`, "gi");
                    return text.replace(
                      regex,
                      `<span class="text-white font-medium">$1</span>`
                    );
                  }, p),
                }}
              />
            ))}
          </motion.div>

          {/* Quick Traits */}
          <div className="mt-10 flex flex-wrap gap-3">
            {[
              "Consistent learner",
              "Detail-oriented",
              "Backend-focused",
              "Problem solver",
            ].map((tag) => (
              <motion.span
                key={tag}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-1.5 rounded-md bg-accent/10 border border-accent/30 text-accent text-sm cursor-default transition-all shadow-sm"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
