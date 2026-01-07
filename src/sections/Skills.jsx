import { motion } from "framer-motion";
import { Code2, Database, Server, Wrench } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const proofPoints = [
  {
    icon: Code2,
    title: "Problem Solving (DSA)",
    desc: "Solved 400+ problems on leetcode with consistent practice, focusing on data structures, algorithms, and edge-case thinking.",
  },
  {
    icon: Database,
    title: "Core CS Foundations",
    desc: "Comfortable with core concepts such as operating systems, databases, and computer networks.",
  },
];

const skillGroups = [
  {
    title: "Backend Development",
    icon: Server,
    items: [
      "Node.js & RESTful APIs",
      "Authentication & Authorization",
      "MongoDB & Database Design",
      "Basic system design principles",
    ],
  },
  {
    title: "Frontend Development",
    icon: Code2,
    items: ["React (Vite)", "Tailwind CSS", "Component-based UI design"],
  },
  {
    title: "Programming Languages",
    icon: Code2,
    items: ["C++", "Python", "JavaScript"],
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    items: ["Git & GitHub", "Postman", "VS Code", "Linux basics"],
  },
];

const Skills = () => {
  return (
    <section className="section">
      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="flex items-center gap-4 text-3xl md:text-4xl font-bold">
          Skills & Expertise
          <span className="h-px flex-1 bg-white/10" />
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* LEFT: Proof & Foundations */}
        <motion.div
          className="lg:col-span-5 space-y-6"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {proofPoints.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="rounded-2xl border border-white/10 bg-card p-6"
            >
              <div className="flex items-start gap-4">
                <item.icon size={28} className="text-accent mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* RIGHT: Skills */}
        <motion.div
          className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-10"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skillGroups.map((group, i) => (
            <motion.div key={i} variants={fadeUp}>
              <div className="flex items-center gap-3 mb-4">
                <group.icon size={20} className="text-accent" />
                <h3 className="text-lg font-semibold text-white">
                  {group.title}
                </h3>
              </div>

              <ul className="space-y-2 text-gray-400">
                {group.items.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
