import EU from "./media/logoEU.jpg";
const Footer = () => {
  return (
    <>
      <div className="row mt-3">
        <div className="col-12 text-center">
          <div className="fs-6 fw-bold mt-4 mb-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo,
            voluptatum id quo in recusandae quam.
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="col-12 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ex
          natus ratione eius est, mollitia ipsa iste dicta temporibus veritatis!
          Sequi excepturi ipsa harum quos, cupiditate quisquam laboriosam
          architecto voluptatem accusamus ex iste. Maiores ut nemo asperiores
          saepe! Autem, nam?
          <img src={EU} alt="" className="img-fluid mt-2 " />
        </div>
        <div className="col-12 d-lg-flex text-sm-center">
          <div className="col-lg-6 col-md-12 p-lg-3 font-footer py-md-3">
            2022 © COPYRIGHT BY MARPOL SP. Z O. O. SP. K. POWERED BY: <a href="https://github.com/S1hredder/" >JAKUB
            STĘPNIK</a>
          </div>
          <div className="col-lg-6 col-md-12 d-lg-flex justify-content-lg-end p-lg-3 font-footer">
            <ul className="nav justify-content-center">
              <li className="nav-item px-1">
                <a href="#section0"> Home</a>
              </li>
              |
              <li className="nav-item px-1">
                {" "}
                <a href="#section1"> O nas</a>
              </li>
              |
              <li className="nav-item px-1">
                {" "}
                <a href="#section2"> NACZEPY</a>
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
              {/* <li className="nav-item px-2">
                {" "}
                <a href="#section5"> Wycena</a>
              </li> */}
              |
              <li className="nav-item px-2">
                {" "}
                <a href="#section6"> Kontatk</a>
              </li>
              |
              <li className="nav-item px-1">
                <a href="/#">
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
    </>
  );
};

export default Footer;
