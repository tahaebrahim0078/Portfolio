import Hero from "./components/2-hero/hero";
import Header from "./components/1-header/header";

import Main from "./components/3-main/main";
import Contact from "./components/4-contact/contact";
import Footer from "./components/5-footer/footer";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setshowScroll(true);
      } else {
        setshowScroll(false);
      }
    });
  }, []);
  const [showScroll, setshowScroll] = useState(false);
  return (
    <div id="up" className="main-every-thing">
      <Header />

      <Hero />
      <div className="lineHr" />
      <Main />
      <div className="lineHr" />
      <Contact />
      <div className="lineHr" />
      <Footer />

      <a href="#up">
        <button
          style={{ opacity: showScroll ? 1 : 0 }}
          className="scroll-to-top icon-keyboard_arrow_up"
        ></button>
      </a>
    </div>
  );
}

export default App;
