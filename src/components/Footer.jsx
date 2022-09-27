import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row row__column">
          <Link to="#">
            <FontAwesomeIcon icon="fa-film" className="footer__logo--logo" />
          </Link>
          <div className="footer__list">
            <Link
              to="/home"
              className="footer__link link__hover-effect link__hover-effect--white"
            >
              Home
            </Link>

            <Link
              to="#"
              className="footer__link link__hover-effect link__hover-effect--white"
            >
              Movies
            </Link>
            <Link className="footer__link link__hover-effect link__hover-effect--white">
              Contact
            </Link>
          </div>
          <div className="footer__copyright">Copyright &copy; 2021</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
