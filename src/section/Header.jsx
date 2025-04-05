import { useState,useRef, useEffect } from "react";
import { FaArrowDown, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function Header({ resume }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/about", { state: { scrollTo: "about-section" } });
    setIsOpen(false); 
  };

  const goToProjects = () => {
    navigate("/projects", { state: { scrollTo: "projects-section" } });
    setIsOpen(false); 
  };

  const goToContact = () => {
    navigate("/contact", { state: { scrollTo: "contact-section" } });
    setIsOpen(false); 
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md sticky top-0 z-50 rounded">
      <div className="text-2xl md:text-3xl text-primaryTitle font-bold tracking-wide cursor-pointer" >
        <a href="/">
            Chanon Lien
        </a>
      
      </div>

      <button
        className="md:hidden text-primaryTitle text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav className="hidden md:flex items-center gap-6">
        <NavLinks resume={resume} goToAbout={goToAbout} goToProjects={goToProjects} goToContact={goToContact}/>
      </nav>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden`}
        onClick={() => setIsOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 w-3/4 sm:w-1/2 h-full bg-white shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden flex flex-col items-start p-6 gap-6`}
      >
        <NavLinks resume={resume} closeMenu={() => setIsOpen(false)} goToAbout={goToAbout} goToProjects={goToProjects} goToContact={goToContact} />
      </div>
    </header>
  );
}


function NavLinks({ resume, closeMenu, goToAbout,goToProjects,goToContact}) {
  return (
    <>
      <button
        className="text-gray-700 hover:text-primaryAccent text-base font-medium transition-all"
        onClick={goToAbout} // ✅ เรียก `goToAbout`
      >
        About Me
      </button>
      <button
        className="text-gray-700 hover:text-primaryAccent text-base font-medium transition-all"
        onClick={goToProjects}
      >
        Projects
      </button>
      <button
        className="text-gray-700 hover:text-primaryAccent text-base font-medium transition-all"
        onClick={goToContact}
      >
        Contact
      </button>

      <a
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primaryTitle text-white py-2 px-5 rounded-lg flex items-center gap-2 font-medium hover:bg-opacity-90 transition-all shadow-md"
        onClick={closeMenu}
      >
        View Resume
        <FaArrowDown className="animate-bounce transform rotate-90" />
      </a>
    </>
  );
}


export default Header;
