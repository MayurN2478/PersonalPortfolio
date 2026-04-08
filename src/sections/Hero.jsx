import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect, useRef } from "react";
import { MdDownload } from "react-icons/md";
import lottie from "lottie-web";
import devAnimation from "../assets/robot.json";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function Hero() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const animationRef = useRef(null); // ✅ FIXED

  useEffect(() => {
    let animation;

    if (animationRef.current) {
      animation = lottie.loadAnimation({
        container: animationRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: devAnimation,
      });
    }

    return () => {
      if (animation) {
        animation.destroy(); // ✅ VERY IMPORTANT
      }
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    // 🔥 REMOVE /projects FROM URL
    if (window.location.pathname !== "/") {
      window.history.replaceState(null, "", "/");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;

    const x = (e.clientX - innerWidth / 2) / 60;
    const y = (e.clientY - innerHeight / 2) / 60;

    setPosition({ x, y });
  };

  return (
    <section id="home" className="scroll-mt-20 min-h-screen flex items-center px-6 md:px-12 pt-20 py-24">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-20 items-center text-center md:text-left">

        {/* LEFT SIDE */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          <motion.p variants={fadeUp} className="text-gray-400 mb-4">
            Hello, I'm
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Mayur N
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            className="text-lg md:text-2xl text-gray-300 mb-6"
          >
            <TypeAnimation
              sequence={[
                "Python & Streamlit Developer", 2000,
                "Associate Software Engineer", 2000,
                "Building Data-Driven Applications", 2000,
                "Azure & CI/CD Experience", 2000,
              ]}
              speed={40}
              repeat={Infinity}
            />
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-400 max-w-md mb-6"
          >
            I build data-driven applications and interactive dashboards using Python and Streamlit, with experience in Azure Cloud and CI/CD pipelines for scalable and production-ready solutions.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 items-center md:items-start justify-center md:justify-start"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-white to-gray-300 text-black font-medium hover:scale-105 transition flex items-center gap-2 justify-center"
            >
              View Resume
              <MdDownload size={16} />
            </a>

            <button
              onClick={() => {
                const el = document.getElementById("projects");
                if (el) {
                  window.history.replaceState(null, "", "#projects"); // clean hash
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition flex items-center justify-center"
            >
              View Projects
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <div
          className="relative flex justify-center items-center"
          onMouseMove={handleMouseMove}
        >
          <motion.div
            animate={{
              x: position.x,
              y: position.y,
            }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
            }}
            className="z-10"
          >
            <motion.div
              animate={{ y: [0, -10, 0], scale: [1, 1.03, 1] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <div
                ref={animationRef}
                className="w-[260px] md:w-[360px] drop-shadow-[0_0_30px_rgba(0,200,255,0.2)]"
              />
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default Hero;