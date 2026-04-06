import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 md:px-12 py-24 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="text-left"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            About Me
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-400 mb-5 leading-relaxed"
          >
            I am an Associate Software Engineer with 1.7 years of experience building 
            <span className="text-white"> scalable web applications</span> and 
            <span className="text-white"> data-driven platforms</span>. I specialize in 
            developing interactive UIs and dashboards using Python and Streamlit.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-gray-400 mb-5 leading-relaxed"
          >
            At Togglr Solutions, I worked on a 
            <span className="text-white"> multi-tenant data lake platform</span>, 
            building real-time dashboards, reusable UI components, and secure systems 
            with JWT-based authentication to manage enterprise data efficiently.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-gray-400 leading-relaxed"
          >
            I also have experience in 
            <span className="text-white"> Azure Cloud and DevOps</span>, where I built CI/CD pipelines 
            and optimized deployment workflows. Currently, I am expanding into full-stack and 
            production-grade scalable systems.
          </motion.p>
        </motion.div>

        {/* RIGHT SIDE (STATS) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 gap-5"
        >
          {[
            { label: "Experience", value: "1.7 Years" },
            { label: "Projects", value: "10+" },
            { label: "Technologies", value: "15+" },
            { label: "Focus", value: "AI, Data & Full Stack" },
          ].map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:scale-[1.03] hover:border-white/20 transition duration-300"
            >
              <h3 className="text-lg font-semibold mb-1">{item.value}</h3>
              <p className="text-gray-400 text-sm">{item.label}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default About;