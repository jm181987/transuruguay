import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

const NavBar = (onClick) => {
  const getWindowSize = () => {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  };

  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const [showNavBar, setShowNavBar] = useState(false);

  return (
    <nav className="navbar navbar-expand py-3 navbar-absolute">
      <div className="container-fluid">
        <a href="/#" className="navbar-brand">
          {windowSize.innerWidth}
        </a>
        {/* LOGO ICON*/}
        {windowSize.innerWidth < 960 ? (
          <GiHamburgerMenu
            style={{ color: "#f6f6f6", fontSize: "30px", cursor: "pointer" }}
            onClick={() => setShowNavBar(!showNavBar)}
          />
        ) : (
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/#" className="nav-link">
                <h5>Home</h5>
              </a>
            </li>
            <li className="nav-item">
              <a href="/#" className="nav-link">
                <h5>O nas</h5>
              </a>
            </li>
            <li className="nav-item">
              <a href="/#" className="nav-link">
                <h5>Czym się zajmujemy</h5>
              </a>
            </li>
            <li className="nav-item">
              <a href="/#" className="nav-link">
                <h5>Nasz Tabor</h5>
              </a>
            </li>
            <li className="nav-item">
              <a href="/#" className="nav-link">
                <h5>Współpraca</h5>
              </a>
            </li>
            <li className="nav-item">
              <a href="/#" className="nav-link">
                <h5>Kontakt</h5>
              </a>
            </li>
            <li className="nav-item">
              <a href="/#" className="nav-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="27"
                  viewBox="0 0 8 5"
                >
                  <rect width="8" height="5" fill="#dc143c" />
                  <rect width="8" height="2.5" fill="#fff" />
                </svg>
              </a>
            </li>
            <li className="nav-item">
              <a href="/#" className="nav-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 60 30"
                  width="27"
                  height="27"
                >
                  <clipPath id="s">
                    <path d="M0,0 v30 h60 v-30 z" />
                  </clipPath>
                  <clipPath id="t">
                    <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
                  </clipPath>
                  <g clipPath="url(#s)">
                    <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                    <path
                      d="M0,0 L60,30 M60,0 L0,30"
                      stroke="#fff"
                      strokeWidth="6"
                    />
                    <path
                      d="M0,0 L60,30 M60,0 L0,30"
                      clipPath="url(#t)"
                      stroke="#C8102E"
                      strokeWidth="4"
                    />
                    <path
                      d="M30,0 v30 M0,15 h60"
                      stroke="#fff"
                      strokeWidth="10"
                    />
                    <path
                      d="M30,0 v30 M0,15 h60"
                      stroke="#C8102E"
                      strokeWidth="6"
                    />
                  </g>
                </svg>
              </a>
            </li>
          </ul>
        )}
        {showNavBar ? (
          <div id="myNav" className="overlay">
            <a href="/#" className="closebtn">
              <FaTimes onClick={() => setShowNavBar(!showNavBar)} />
            </a>
            <div className="overlay-content">
              <a href="/#">Home</a>
              <a href="/#">O nas</a>
              <a href="/#">Czym się zajmujemy </a>
              <a href="/#">Nasz Tabor</a>
              <a href="/#">Współpraca</a>
              <a href="/#">Kontakt</a>
              <a href="/#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="27"
                  viewBox="0 0 8 5"
                >
                  <rect width="8" height="5" fill="#dc143c" />
                  <rect width="8" height="2.5" fill="#fff" />
                </svg>
              </a>
              <a href="/#">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 60 30"
                  width="27"
                  height="27"
                >
                  <clipPath id="s">
                    <path d="M0,0 v30 h60 v-30 z" />
                  </clipPath>
                  <clipPath id="t">
                    <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
                  </clipPath>
                  <g clipPath="url(#s)">
                    <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                    <path
                      d="M0,0 L60,30 M60,0 L0,30"
                      stroke="#fff"
                      strokeWidth="6"
                    />
                    <path
                      d="M0,0 L60,30 M60,0 L0,30"
                      clipPath="url(#t)"
                      stroke="#C8102E"
                      strokeWidth="4"
                    />
                    <path
                      d="M30,0 v30 M0,15 h60"
                      stroke="#fff"
                      strokeWidth="10"
                    />
                    <path
                      d="M30,0 v30 M0,15 h60"
                      stroke="#C8102E"
                      strokeWidth="6"
                    />
                  </g>
                </svg>
              </a>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};

export default NavBar;
