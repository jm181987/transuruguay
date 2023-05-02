import EU from "./media/logoEU.jpg";
const Footer = () => {
  return (
    <>
      
      <div className="row ">
       
        <div className="col-12 d-lg-flex text-sm-center">
          <div className="col-lg-6 col-md-12 p-lg-3 font-footer py-md-3">
            2023 © COPYRIGHT BY <a href="https://github.com/jm181987/" >JORGE MARQUEZ
            <a
              href="https://www.linkedin.com/in/jorge-marquez-correa/"
              target="_blank"
              className="nav-link"
              rel="noopener noreferrer"
            >
              <span className="linkedin-icon"></span>
            </a> 
            </a>

            
            
          
          </div>
          <div className="col-lg-6 col-md-12 d-lg-flex justify-content-lg-end p-lg-3 font-footer">
            <ul className="nav justify-content-center">
              <li className="nav-item px-1">
                <a href="#section0"> Inicio</a>
              </li>
              |
              <li className="nav-item px-1">
                {" "}
                <a href="#section1"> Sobre Nosotros</a>
              </li>
              |
              <li className="nav-item px-1">
                {" "}
                <a href="#section2">Nuestra flota</a>
              </li>
                        
              
              
              
              |
              <li className="nav-item px-2">
                {" "}
                <a href="#section6">Contacto</a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
