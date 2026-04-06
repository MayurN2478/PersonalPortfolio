import { useEffect, useState } from "react";

function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  const handleScrollClick = (id) => {
    const section = document.getElementById(id);

    if (section) {
      // ✅ update URL hash (no routing)
      window.history.replaceState(null, "", `#${id}`);

      section.scrollIntoView({ behavior: "smooth" });
    }

    setMenuOpen(false);
  };

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      // clean URL
      window.history.replaceState(null, "", "/");
    }, 100);

    const handleScroll = () => {
      let current = "home";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const top = section.offsetTop - 120;
          if (window.scrollY >= top) {
            current = item.id;
          }
        }
      });

      setActive(current);
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-xl shadow-lg"
          : "bg-gradient-to-b from-black/40 to-transparent backdrop-blur-2xl"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-lg font-bold">Mayur</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 relative">
          {navItems.map((item) => (
            <div key={item.id} className="relative">
              <button
                onClick={() => handleScrollClick(item.id)}
                className={`text-sm transition ${
                  active === item.id
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item.name}
              </button>

              {active === item.id && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white"></span>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 bg-black/90 backdrop-blur-lg">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollClick(item.id)}
              className={`text-left ${
                active === item.id ? "text-white" : "text-gray-400"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;