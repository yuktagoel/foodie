import { Link } from "react-router-dom";

const Header = () => (
  <header className="navbar">
    <div className="navbar__title navbar__item">
      <Link to="/">CheekyChow </Link>
    </div>
    <div className="navbar__item">
      <Link to="/about">About Us</Link>
    </div>
    <div className="navbar__item">
      <Link to={"/contact"}>Contact</Link>
    </div>
  </header>
);

export default Header;
