import { motion } from "framer-motion";

const projects = [
  {
    title: "Multi-Tenant Data Platform",
    description:
      "Built a Streamlit-based data platform enabling unified access, visualization, and management of enterprise data.",
    tech: ["Python", "Streamlit", "APIs"],
  },
  {
    title: "Book Publication Website",
    description:
      "Designed a fully responsive UI using Figma with modern layout, smooth navigation, and clean UX.",
    tech: ["Figma", "UI/UX", "Responsive Design"],
  },
  {
    title: "Accident Prevention System",
    description:
      "IoT-based system using sensors to detect vehicles on blind curves and alert drivers in real time.",
    tech: ["C++", "Arduino", "IoT"],

  },
  {
    title: "Movie Ticket Booking System",
    description:
      "Full-stack project with booking system, seat selection, and dynamic UI using HTML, CSS, JS, and PHP.",
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
  },
  {
    title: "3D Museum Walkthrough",
    description:
      "Interactive 3D environment using OpenGL with camera movement and realistic rendering.",
    tech: ["C++", "OpenGL"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 md:px-12 py-24 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
          Projects
        </h2>

        {/* Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 flex flex-col justify-between 
              hover:-translate-y-2 hover:border-purple-400 
              hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] 
              transition-all duration-300"
            >
              {/* Top Content */}
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/10 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>


            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;