import { useEffect, useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";
const Main = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);

    const newArr = myProjects.filter((item) => {
      const ZZZ = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });

      return ZZZ === buttonCategory;
    });

    setArr(newArr);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 230) {
        setMainScroll(true);
      } else {
        setMainScroll(false);
      }
    });
  }, []);
  const [mainScroll, setMainScroll] = useState(false);
  return (
    <main id="projects" style={{ opacity: mainScroll ? 1 : 0 }} className="flex transo">
      <section className="flex  left-section">
        <button
          onClick={() => {
            setcurrentActive("all");
            setArr(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          all projects
        </button>

        <button
          onClick={() => {
            handleClick("css");
          }}
          className={currentActive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>

        <button
          onClick={() => {
            handleClick("js");
          }}
          className={currentActive === "js" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            handleClick("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          React & MUI
        </button>
        <button
          onClick={() => {
            handleClick("node");
          }}
          className={currentActive === "node" ? "active" : null}
        >
          Node & Express
        </button>
      </section>

      <section className=" flex right-section">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item.imgPath}
                className="  card"
              >
                <a target="_blank" href={item.url}>
                <img width={266} src={item.imgPath} alt="" />

                <div style={{ width: "266px" }} className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="sub-title">{item.paragraphSUPTITLE}</p>

                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <a target="_blank" href="">
                        <div className="icon-link"></div>
                      </a>
                      <a target="_blank" href={item.urlGitHubProjects}>
                        <div className="icon-github"></div>
                      </a>
                    </div>

                    <a target="_blank" className="link flex" href={item.url}>
                      more
                      <span className="icon-arrow_forward"></span>
                    </a>
                  </div>
                </div>
                </a>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
