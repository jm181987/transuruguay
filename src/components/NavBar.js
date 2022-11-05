const Nav = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark py-3 ">
      <div className="container-fluid">
        <a href="#" className="navbar-brand"></a> {/* LOGO ICON*/}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              O nas
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              Czym się zajmujemy
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              Nasz Tabor
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              Współpraca
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              Kontakt
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 8 5"
              >
                <rect width="8" height="5" fill="#dc143c" />
                <rect width="8" height="2.5" fill="#fff" />
              </svg>
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 60 30"
                width="25"
                height="25"
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
    </nav>
  );
};

export default Nav;
