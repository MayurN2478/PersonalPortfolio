import { motion } from "framer-motion";
import { useState } from "react";

const skills = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Streamlit", icon: "https://streamlit.io/images/brand/streamlit-mark-color.png" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
  { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { name: "Azure DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
];

function Skills() {
  const [paused, setPaused] = useState(false);

  return (
    <section
      id="skills"
      className="min-h-screen px-6 md:px-12 py-24 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
          Skills
        </h2>

        {/* Wrapper */}
        <div
          className="overflow-hidden py-6"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
            style={{
              animationPlayState: paused ? "paused" : "running",
            }}
            className="flex gap-6 w-max"
          >
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="w-40 h-40 flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg 
                hover:scale-105 hover:border-purple-400 
                hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] 
                transition-all duration-300"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 mb-4"
                />
                <p className="text-sm text-gray-300 text-center px-2">
                  {skill.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default Skills;