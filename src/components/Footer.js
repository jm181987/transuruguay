import logo from "./logoEU.jpg";
const Footer = () => {
  return (
    <div className="row mt-3">
      <div className="col-12 text-center">
        <div className="map-responsive">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1021.0095103875435!2d16.750266578062792!3d52.50839755934989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4704405c79fab24d%3A0x9bfe31c8e6591d78!2sRolna%2015A%2C%2062-090%20Rokietnica!5e0!3m2!1spl!2spl!4v1668842427492!5m2!1spl!2spl"
            width="100vw"
            height="100vh"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      <div className="fs-6 fw-bold mt-4 mb-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo,
        voluptatum id quo in recusandae quam.
      </div>
      </div>
      <div className="row text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ex
        natus ratione eius est, mollitia ipsa iste dicta temporibus veritatis!
        Sequi excepturi ipsa harum quos, cupiditate quisquam laboriosam
        architecto voluptatem accusamus ex iste. Maiores ut nemo asperiores
        saepe! Autem, nam?
        <img src={logo} alt="" className="img-fluid mt-2 " />
      </div>
      <div className="col-12 map"></div>
      <div className="col-12 d-lg-flex text-sm-center">
        <div className="col-lg-6 col-md-12 p-lg-3 font-footer py-md-3">
          2022 © COPYWRIGHT BY MAC-TRANS SP. Z O. O. SP. K. POWERED BY: JAKUB
          STĘPNIK
        </div>
        <div className="col-lg-6 col-md-12 d-lg-flex justify-content-lg-end p-lg-3 font-footer">
          <ul className="nav justify-content-center">
            <li className="nav-item px-1">
              <a href="\#"> Home</a>
            </li>
            |
            <li className="nav-item px-1">
              {" "}
              <a href="#section0"> O nas</a>
            </li>
            |
            <li className="nav-item px-1">
              {" "}
              <a href="#section1"> Czym się zajmujemy</a>
            </li>
            |
            <li className="nav-item px-1">
              {" "}
              <a href="#section3"> Nasz Tabor</a>
            </li>
            |
            <li className="nav-item px-2">
              {" "}
              <a href="#section4"> Współpraca</a>
            </li>
            |
            <li className="nav-item px-2">
              {" "}
              <a href="#section5"> Wycena</a>
            </li>
            |
            <li className="nav-item px-2">
              {" "}
              <a href="#section6"> Kontatk</a>
            </li>
            |
            <li className="nav-item px-1">
              <a href="#section5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 8 5"
                >
                  <rect width="8" height="5" fill="#dc143c" />
                  <rect width="8" height="2.5" fill="#fff" />
                </svg>
              </a>
            </li>
            |
            <li className="nav-item px-1">
              <a href="/#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 60 30"
                  width="17"
                  height="17"
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
        </div>
      </div>
    </div>
  );
};

export default Footer;
