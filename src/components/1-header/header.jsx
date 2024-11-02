import { useEffect, useState } from "react";
import "./header.css";

const Header = () => {
  const [showModal, setshowModal] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "dark");

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);
  return (
    <header className="hoodi  flex">
      <button
        onClick={() => {
          setshowModal(true);
        }}
        className="menu icon-menu flex"
      >
        {" "}
      </button>
      <div />

      <nav>
        <ul className="flex">
          <li>
            <a href="#heroo">About</a>
          </li>

          <li>
            <a href="#heroo">Articles</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contacty">Speaking</a>
          </li>
          <li>
            <a href="#contacty">Contact</a>
          </li>
        </ul>
      </nav>

      <button 
        onClick={() => {
          
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );

          setTheme(localStorage.getItem("currentMode"));
        }}
        className="mode flex"
      >
        {theme === "dark" ? (
          <span  style={{color:"white"}} className="icon-moon-o"> </span>
        ) : (
          <span style={{color:"black"}} className="icon-wb_sunny"> </span>
        )}
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal ">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setshowModal(false);
                }}
              />
            </li>
            <li> 
              <a  onClick={() => {
                  setshowModal(false);
                }}href="#heroo">About</a>
            </li>
            <li>
              <a  onClick={() => {
                  setshowModal(false);
                }} href="#heroo">Articles</a>
            </li>
            <li>
              <a  onClick={() => {
                  setshowModal(false);
                }} href="#projects">Projects</a>
            </li>
            <li>
              <a  onClick={() => {
                  setshowModal(false);
                }} href="#contacty">Speaking</a>
            </li>
            <li>
              <a  onClick={() => {
                  setshowModal(false);
                }} href="#contacty">Uses</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
