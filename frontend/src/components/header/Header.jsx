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
      </nav>
    </>
  );
};

export default Header;
