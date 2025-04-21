
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold">
          Adnan<span className="text-primary">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="animated-underline font-medium">About</a>
          <a href="#skills" className="animated-underline font-medium">Skills</a>
          <a href="#experience" className="animated-underline font-medium">Experience</a>
          <a href="#projects" className="animated-underline font-medium">Projects</a>
          <a href="#contact" className="sticker-button bg-primary text-white">Contact Me</a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t mt-2">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#about" className="font-medium py-2" onClick={() => setIsOpen(false)}>About</a>
            <a href="#skills" className="font-medium py-2" onClick={() => setIsOpen(false)}>Skills</a>
            <a href="#experience" className="font-medium py-2" onClick={() => setIsOpen(false)}>Experience</a>
            <a href="#projects" className="font-medium py-2" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#contact" className="sticker-button bg-primary text-white w-fit" onClick={() => setIsOpen(false)}>Contact Me</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
