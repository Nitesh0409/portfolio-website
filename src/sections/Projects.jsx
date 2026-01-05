import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const featuredProject = {
  title: "Lost Item Finder",
  desc: "A full-stack MERN web application for college campuses that enables users to report lost or found items, upload images, view items on a map, and securely claim ownership. The platform uses JWT-based authentication, role-based access control, and structured REST APIs to ensure secure interactions and accurate item recovery.",
  highlights: [
    "JWT authentication & protected routes",
    "Role-based claim approval system",
    "Lost & found posts with images",
    "Multer + Cloudinary file handling",
    "Map-based item locations (Leaflet)",
    "User dashboard & activity tracking",
    "REST APIs with MongoDB schemas",
  ],
  tags: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "JWT",
    "Cloudinary",
    "Leaflet",
  ],
  github: "https://github.com/Nitesh0409/Lost_Item_Finder",
  live: null, // will add live website later
};


const otherProjects = [
  {
    title: "Handwritten Digit Recognition",
    desc: "Course project where I led a team of 6 to implement and compare multiple machine learning algorithms for handwritten digit recognition, focusing on planning, task distribution, and model evaluation.",
    tags: ["Python", "Machine Learning", "Scikit-learn"],
    github: "https://github.com/Nitesh0409/prml_project_page",
  },
  {
    title: "Finger Counter",
    desc: "A small computer vision project built to learn OpenCV and MediaPipe by counting fingers from real-time webcam input.",
    tags: ["Python", "OpenCV", "MediaPipe"],
    github: "https://github.com/Nitesh0409/finger_counter",
  },
];


const Projects = () => {
  return (
    <section className="section">
      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-16 max-w-2xl"
      >
        <h2 className="flex items-center gap-4 text-3xl md:text-4xl font-bold">
          <span className="text-accent font-mono text-2xl">04.</span>
          Projects
          <span className="h-px flex-1 bg-white/10" />
        </h2>
        <p className="mt-4 text-gray-400">
          A focused set of projects highlighting backend development,
          problem-solving, and applied coursework.
        </p>
      </motion.div>

      {/* Featured Project */}
      <motion.article
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-16 rounded-2xl border border-white/10 bg-card p-8"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-semibold text-white">
            {featuredProject.title}
          </h3>

          <div className="flex gap-4 text-gray-400">
            <a
              href={featuredProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>

            {featuredProject.live && (
              <a
                href={featuredProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        <p className="text-gray-400 max-w-3xl leading-relaxed mb-6">
          {featuredProject.desc}
        </p>

        <ul className="grid sm:grid-cols-2 gap-3 mb-6 text-gray-400">
          {featuredProject.highlights.map((point) => (
            <li key={point} className="flex items-start gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2" />
              {point}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {featuredProject.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs uppercase tracking-wide text-gray-500 border border-white/10 px-3 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.article>

      {/* Other Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {otherProjects.map((project, i) => (
          <motion.article
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-card p-6 hover:border-accent/40 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-white">
                {project.title}
              </h4>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={18} />
              </a>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] uppercase tracking-wide text-gray-500 border border-white/10 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
