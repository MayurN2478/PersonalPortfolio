import { motion } from "framer-motion";
import { MdEmail, MdPhone } from "react-icons/md";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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

function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");
  const [toast, setToast] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_p3zmdv2",
        "template_m7bi3ze",
        formRef.current,
        "SDUCEQM8CkuWVEFfr"
      )
      .then(
        () => {
          setStatus("");
          formRef.current.reset();
          setToast("success");

          setTimeout(() => setToast(""), 3000);
        },
        (error) => {
          console.log(error);
          setStatus("");
          setToast("error");

          setTimeout(() => setToast(""), 3000);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-6 md:px-12 py-24 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Let's Connect
            </h3>

            <p className="text-gray-400">
              Feel free to reach out for collaborations, projects, or just a friendly chat.
            </p>

            <div className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg hover:border-purple-400 transition">
              <MdEmail size={24} />
              <span>mayur.n2001@gmail.com</span>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg hover:border-purple-400 transition">
              <MdPhone size={24} />
              <span>+91 8088631569</span>
            </div>
          </motion.div>

          {/* RIGHT SIDE - FORM */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-6 p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg"
          >

            {/* Floating Name */}
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-transparent border border-white/10 focus:border-purple-400 outline-none placeholder-gray-500"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-transparent border border-white/10 focus:border-purple-400 outline-none placeholder-gray-500"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full p-3 rounded-lg bg-transparent border border-white/10 focus:border-purple-400 outline-none placeholder-gray-500"
            />

            {/* BUTTON WITH SPINNER */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3 bg-white text-black rounded-lg font-medium flex items-center justify-center gap-2 hover:scale-105 transition disabled:opacity-50"
            >
              {status === "sending" ? (
                <>
                  <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>

          </motion.form>

        </div>
      </div>

      {/* 🔥 TOAST NOTIFICATIONS */}
      {toast === "success" && (
        <div className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-lg shadow-lg animate-slideIn">
          Message sent successfully ✅
        </div>
      )}

      {toast === "error" && (
        <div className="fixed bottom-6 right-6 bg-red-500 text-white px-5 py-3 rounded-lg shadow-lg animate-slideIn">
          Failed to send ❌
        </div>
      )}
    </section>
  );
}

export default Contact;