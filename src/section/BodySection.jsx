import About from "./About"
import Experience from "./Experience"
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Contact1 from "./Contact1";

const BodySection = () => {
  const location = useLocation();
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);


  useEffect(() => {
    if (location.state?.scrollTo === "about-section") {
      aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (location.state?.scrollTo === "projects-section") {
      projectsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (location.state?.scrollTo === "contact-section") {
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className=''>
      <div className='mb-56 scroll-mt-20' ref={aboutRef} >
        <div className="p-2">
          <div className="flex justify-between">
            <p className="text-2xl md:text-3xl text-primaryContent font-bold">About Me</p>
            <p className="font-semibold">"I am a beginner looking for a job as a Full-Stack Developer (React + Node.js)."</p>
          </div>
          <About />
        </div>
      </div>
      <div className='mb-56 scroll-mt-20' ref={projectsRef}><Experience /></div>
      <div className='mb-[45vh] scroll-mt-20'  ref={contactRef} >
        <Contact1/>
      </div>
      
    </div>
  )
}
export default BodySection