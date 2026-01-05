import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, GraduationCap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contact = () => {
  return (
    <section className="section">
      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-20 max-w-3xl"
      >
        <h2 className="flex items-center gap-4 text-3xl md:text-4xl font-bold">
          <span className="text-accent font-mono text-2xl">04.</span>
          Get In Touch
          <span className="h-px flex-1 bg-white/10" />
        </h2>

        <p className="mt-6 text-gray-400 text-lg leading-relaxed">
          I am currently open to{" "}
          <span className="text-white font-medium">
            SDE internship opportunities
          </span>
          . I enjoy working on problems that require strong fundamentals, clean
          design, and thoughtful engineering. If my profile aligns with your
          team, I would be glad to connect.
        </p>
      </motion.div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* LEFT — Narrative + CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:col-span-7 space-y-10"
        >
          {/* CTA */}
          <div>
            <a
              href="mailto:niteshkkanojia@gmail.com"
              className="inline-flex items-center gap-3 rounded-xl border border-accent/40 px-10 py-5
                         text-accent font-semibold hover:bg-accent hover:text-black
                         transition-all duration-300"
            >
              <Mail size={22} />
              niteshkkanojia@gmail.com
            </a>
          </div>

          {/* Context Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <GraduationCap className="text-accent" size={22} />
              <div>
                <p className="font-medium text-white">Education</p>
                <p className="text-gray-400 text-sm">
                  B.Tech in Electrical Engineering <br />
                  IIT Jodhpur
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-accent" size={22} />
              <div>
                <p className="font-medium text-white">Location</p>
                <p className="text-gray-400 text-sm">India · Open to Remote</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — Social Proof */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:col-span-5"
        >
          <div className="rounded-2xl border border-white/10 bg-card p-8 space-y-6">
            <p className="text-sm text-gray-400">Find me on</p>

            <div className="flex gap-6">
              <a
                href="https://github.com/Nitesh0409"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Github size={26} />
                <span className="font-medium">GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/nitesh-kkanojia0409"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={26} />
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>

            <p className="text-sm text-gray-500 leading-relaxed">
              I actively share projects and problem-solving work on GitHub. My
              focus is on clarity, consistency, and continuous improvement.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="mt-28 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-center gap-6 text-sm text-gray-500">
        <p className="font-mono">
          © {new Date().getFullYear()} Built by{" "}
          <span className="text-accent font-semibold">Nitesh</span>
        </p>
      </footer>
    </section>
  );
};

export default Contact;
