import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import logo from "./media/transuruguay.jpg";
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
      <a href="/#" className="navbar-brand navbar-margin-left" style={{ paddingBottom:"15px"}}>
        <img src={logo} alt="" className="icona" />
      </a>
          {/* {windowSize.innerWidth} */}
          {windowSize.innerWidth < 1205 ? (    
             <GiHamburgerMenu
              style={{ color: "#f6f6f6", fontSize: "30px", cursor: "pointer" }}
              onClick={() => setShowNavBar(!showNavBar)}
            />
          ) : (
            <ul className="navbar-nav navbar-margin-right">
              <li className="nav-item">
                <a href="#section0" className="nav-link">
                  <h5>Inicio</h5>
                </a>
              </li>
              <li className="nav-item">
                <a href="#section1" className="nav-link">
                  <h5>Sobre Nosotros</h5>
                </a>
              </li>
              <li className="nav-item">
                <a href="#section2" className="nav-link">
                  <h5>Flota</h5>
                </a>
              </li>
             
              <li className="nav-item">
                <a href="#section4" className="nav-link">
                  <h5>Administración</h5>
                </a>
              </li>
              {/* <li className="nav-item">
                <a href="#section5" className="nav-link">
                  <h5>Wycena</h5>
                </a>
              </li> */}
              <li className="nav-item">
                <a href="#section6" className="nav-link">
                  <h5>Contactenos</h5>
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
                Sobre nosotros
                </a>
                <a href="#section2" onClick={() => setShowNavBar(false)}>
                  Nuestra flota{" "}
                </a>
                
                <a href="#section4" onClick={() => setShowNavBar(false)}>
                  Administraciòn
                </a>
                {/* <a href="/#section5" onClick={() => setShowNavBar(false)}>
                  Wycena
                </a> */}
                <a href="/#section6" onClick={() => setShowNavBar(false)}>
                  Contacto
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
