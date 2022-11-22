import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import logo from "./media/logo-beztla_z.png";
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
    <>
      <nav className="navbar navbar-expand  m-0 p-0 navbar-absolute">
        <div className="container-fluid">
      <a href="/#" className="navbar-brand" style={{marginLeft:"5.7rem", paddingBottom:"15px"}}>
        <img src={logo} alt="" className="icona" />
      </a>
          {/* {windowSize.innerWidth} */}
          {windowSize.innerWidth < 1205 ? (    
             <GiHamburgerMenu
              style={{ color: "#f6f6f6", fontSize: "30px", cursor: "pointer" }}
              onClick={() => setShowNavBar(!showNavBar)}
            />
          ) : (
            <ul className="navbar-nav" style={{marginRight:"5.7rem"}}>
              <li className="nav-item">
                <a href="#section0" className="nav-link">
                  <h5>Home</h5>
                </a>
              </li>
              <li className="nav-item">
                <a href="#section1" className="nav-link">
                  <h5>O nas</h5>
                </a>
              </li>
              <li className="nav-item">
                <a href="#section2" className="nav-link">
                  <h5>Naczepy</h5>
                </a>
              </li>
              <li className="nav-item">
                <a href="#section3" className="nav-link">
                  <h5>Nasz Tabor</h5>
                </a>
              </li>
              <li className="nav-item">
                <a href="#section4" className="nav-link">
                  <h5>Współpraca</h5>
                </a>
              </li>
              <li className="nav-item">
                <a href="#section5" className="nav-link">
                  <h5>Wycena</h5>
                </a>
              </li>
              <li className="nav-item">
                <a href="#section6" className="nav-link">
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
              <div className="closebtn">
                <FaTimes onClick={() => setShowNavBar(!showNavBar)} />
              </div>
              <div className="overlay-content">
                <a href="#section0" onClick={() => setShowNavBar(false)}>
                  Home
                </a>
                <a href="#section1" onClick={() => setShowNavBar(false)}>
                  O nas
                </a>
                <a href="#section2" onClick={() => setShowNavBar(false)}>
                  Naczepy{" "}
                </a>
                <a href="#section3" onClick={() => setShowNavBar(false)}>
                  Nasz Tabor
                </a>
                <a href="#section4" onClick={() => setShowNavBar(false)}>
                  Współpraca
                </a>
                <a href="/#section5" onClick={() => setShowNavBar(false)}>
                  Wycena
                </a>
                <a href="/#section6" onClick={() => setShowNavBar(false)}>
                  Kontakt
                </a>
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
    </>
  );
};

export default NavBar;
