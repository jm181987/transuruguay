const navTop = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-black py-0">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="tel:+6494461709" className="nav-link">
              <span className="phone-icon">(+598) 462 46559 </span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/#" className="nav-link">
              <span className="clock-icon">8:00 A 12:30 - 14:00 A 18:30</span>
            </a>
          </li>
        </ul>
        <ul className="navbar-nav">
            <li className="nav-item">
            <a
              href="https://www.linkedin.com/in/jorge-marquez-correa/"
              target="_blank"
              className="nav-link"
              rel="noopener noreferrer"
            >
              <span className="linkedin-icon"></span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default navTop;
