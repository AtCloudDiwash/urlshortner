import navLogo from "./../../assets/nav_logo.svg";
import hamburgerIcon from "./../../assets/hamburger_icon.svg";
import "./header.css";
const Header = () => {
  return (
    <>
      <nav className="navbar" id="main-navbar">
        <div className="navbar-logo" id="navbar-logo">
          <img
            src={navLogo}
            alt="Shorten Me"
            className="logo-img"
            id="logo-img"
          />
        </div>

        {/* <div className="hamburger-wrapper">
          <img src={hamburgerIcon} alt="" />
        </div> */}

        <ul className="navbar-links" id="navbar-links">
          <li className="nav-item" id="login-button">
            <button className="nav-btn" id="login-btn">
              Log In
            </button>
          </li>
          <li className="nav-item" id="register-button">
            <button className="nav-btn" id="register-btn">
              Register Now
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
