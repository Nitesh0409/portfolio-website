import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Code2 } from "lucide-react";


const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut", duration: 0.6 },
  },
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="section">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* LEFT: Text */}
          <div className="lg:col-span-8">
            <motion.span
              variants={item}
              className="inline-flex items-center gap-2 text-sm font-medium text-accent mb-6"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Available for SDE Internship
            </motion.span>

            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight"
            >
              SDE Intern Aspirant
              <span className="block text-gray-400 font-medium">
                strong in DSA & backend fundamentals
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-lg text-gray-400 leading-relaxed"
            >
              I’m <span className="text-white font-medium">Nitesh</span>, a
              3rd-year Electrical Engineering student at IIT Jodhpur, preparing
              for SDE internships. I focus on problem-solving through DSA,
              building backend-driven web applications, and strengthening core
              computer science concepts.
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-black transition hover:bg-gray-200"
              >
                View Projects
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="https://github.com/Nitesh0409"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-transparent px-7 py-4 text-sm font-medium text-white transition hover:border-white/30"
              >
                <Github size={18} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/nitesh-kkanojia0409"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-transparent px-7 py-4 text-sm font-medium text-white transition hover:border-white/30"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>

              <a
                href="https://leetcode.com/u/Nitesh-0409/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-transparent px-7 py-4 text-sm font-medium text-white transition hover:border-white/30"
              >
                <Code2 size={18} />
                LeetCode
              </a>
            </motion.div>
          </div>

          {/* RIGHT: Info Block */}
          <motion.div variants={item} className="lg:col-span-4">
            <div className="rounded-2xl border border-white/10 bg-card p-6 space-y-6">
              <div>
                <p className="text-sm text-gray-400">Primary Focus</p>
                <p className="text-lg font-semibold text-white">
                  DSA · Backend Development
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-400">Tech Stack</p>
                <p className="text-lg font-semibold text-white">
                  React · Node.js · MongoDB
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-400">Approach</p>
                <p className="text-lg font-semibold text-white">
                  Build simple, scalable solutions
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
