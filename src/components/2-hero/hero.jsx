import "./hero.css";
import Lottie from "lottie-react";
import doneAnimation from "./laptop.json";
import doneProfile from "./doneTaha.json";
import Profile from "./profile.json";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section id="heroo" className="hero flex">
      <div className="left-section ">
        <motion.div 
         initial={{ transform: "scale(0.4)" }}
         animate={{ transform: "scale(1)" }}
         transition={{ type: "spring", damping: 5, stiffness: 60 }}
        className="main-icon">
          <Lottie style={{ height: 150 }} animationData={Profile} />
          <div>
            <Lottie style={{ height: 70 }} animationData={doneProfile} />
          </div>
        </motion.div>

        <motion.h1 
            initial={{ transform: "scale(0.4)" }}
            animate={{ transform: "scale(1)" }}
            transition={{ type: "spring", damping: 5, stiffness: 30 }}
        className="titly">
          Software Designer,FrontEnd Developer
        </motion.h1>
        <p className="suptitle">
          im <span className="taha">Taha Ebrahim</span> Software
          Designer,FrontEnd developer useing HTML , CSS , MIUI , JS , REACT ,
          and know some basics of BackEnd useing NEXT , JS NODE.JS , MongoDB .
        </p>
        <div className="all-icons flex">
          <a target="_blank" href="https://twitter.com/tahaEbrahim0">
            <div className="icon icon-twitter"></div>
          </a>
          <a target="_blank" href="https://www.instagram.com/taha.ebraheem.31/">
            <div className="icon icon-instagram"></div>
          </a>
         <a target="_blank" href="https://github.com/tahaebrahim0078">
           <div className="icon icon-github"></div>
         </a>
         <a target="_blank" href="https://www.linkedin.com/in/taha-ebrahim-24918b265/">
           <div className="icon icon-linkedin-square"></div>
         </a>
        </div>
      </div>
      <div className="right-section animation ">
        <Lottie style={{ height: 600 }} animationData={doneAnimation} />
      </div>
    </section>
  );
};

export default Hero;
