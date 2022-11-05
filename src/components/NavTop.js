const navTop = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-black py-0">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="tel:+6494461709" className="nav-link">
              <span className="phone-icon">(+48) 111 111 111</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <span className="clock-icon">Pon-Pt 8:00-16:00</span>
            </a>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              href="https://www.facebook.com"
              target="_blank"
              className="nav-link"
            >
              <span className="facebook-icon"></span>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://pl.linkedin.com"
              target="_blank"
              className="nav-link"
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
