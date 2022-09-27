import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav() {
  return (
    <nav className="animate fadeInDown">
      <div className="nav__logo">
        <Link to="/">
          <FontAwesomeIcon
            icon="fa-solid fa-film"
            className="nav__logo--logo"
          />
          <span className="nav__logo--name color">MOVIEFINDER</span>
        </Link>
      </div>
      <ul className="nav__links">
        <li className="nav__link color click">
          <Link
            to="/"
            className="nav__link--anchor color link__hover-effect link__hover-effect--color"
          >
            Home
          </Link>
        </li>
        <li className="nav__link color click">
          <Link
            to="/movies"
            className="nav__link--anchor color link__hover-effect link__hover-effect--color"
          >
            Find Movie
          </Link>
        </li>
        <li className="nav__link nav__contact background__color click">
          <Link to="" className="nav__link--anchor nav__contact--anchor">
            Contact
          </Link>
        </li>
      </ul>
      <div className="nav__menu click">
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className="nav__menu--close click">
        <i className="fa-solid fa-xmark"></i>
      </div>
    </nav>
  );
}

export default Nav;
