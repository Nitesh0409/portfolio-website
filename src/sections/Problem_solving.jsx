import { motion } from "framer-motion";
import { Github ,Code2, Layers, Clock } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const DSA = () => {
  return (
    <section className="section">
      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-16 max-w-3xl"
      >
        <h2 className="flex items-center gap-4 text-3xl md:text-4xl font-bold">
          <span className="text-accent font-mono text-2xl">03.</span>
          DSA Practice
          <span className="h-px flex-1 bg-white/10" />
        </h2>

        <p className="mt-6 text-lg text-gray-400">
          A personal C++ repository for practicing and revising core{" "}
          <span className="text-white font-medium">
            Data Structures and Algorithms
          </span>{" "}
          as part of my interview preparation.
        </p>
      </motion.div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* LEFT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:col-span-7 space-y-6"
        >
          <ul className="space-y-4 text-gray-400 text-lg">
            {[
              "Concept-wise folders (Arrays, Graphs, DP, Trees, etc.)",
              "Focused on fundamentals and revision",
              "Common patterns and algorithms implemented",
              "Clean, readable, and evolving codebase",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3">
                <Clock size={18} className="text-accent mt-1" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="https://github.com/Nitesh0409/DSA_sheet"
              target="_blank"
              className="inline-flex items-center gap-3 rounded-xl border border-accent/40
                         px-8 py-4 text-accent font-semibold
                         hover:bg-accent hover:text-black transition"
            >
              <Github size={20} />
              GitHub Repository
            </a>

            <a
              href="https://leetcode.com/u/Nitesh-0409/"
              target="_blank"
              className="inline-flex items-center gap-3 rounded-xl border border-accent/20
                         px-8 py-4 text-accent font-semibold
                         hover:bg-accent hover:text-black transition"
            >
              <Code2 size={20} />
              LeetCode Profile
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:col-span-5"
        >
          <div className="rounded-2xl border border-white/10 bg-card p-8 space-y-6">
            <div className="flex items-center gap-4">
              <Code2 className="text-accent" size={24} />
              <div>
                <p className="font-semibold text-white">Language</p>
                <p className="text-sm text-gray-400">C++</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Layers className="text-accent" size={24} />
              <div>
                <p className="font-semibold text-white">Topics</p>
                <p className="text-sm text-gray-400">
                  Arrays, Graphs, DP, Trees, Recursion, Stack & Queue, Segment &
                  Fenwick Trees
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-500">
              Built with consistency and steady progress rather than
              completeness.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DSA;
