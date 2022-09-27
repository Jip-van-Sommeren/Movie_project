import React, { useState, setState } from "react";
import MovieImage from "../assets/undraw_movie_night_re_9umk (1).svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigate } from "react-router-dom";

function HomePage() {
  // this.setState({ title: title });

  const [title, setTitle] = useState("");
  const [redirect, setRedirect] = useState(false);

  function showMovies(event) {
    // console.log(event.target.value);
    setTitle(event.target.value);
    // console.log(title);
  }
  function submitMovies(e) {
    e.preventDefault();
    // setTitle(event.target.value);
    // console.log(e);
    console.log(title);
    setRedirect(true);

    // if (redirect) {
    //   return <Navigate to="/movies" title={title} />;
    // }
    // navigate("/movies", { title: title });
  }
  if (redirect) {
    return <Navigate to="/movies" state={{ title: title }} />;
  }
  return (
    <section id="header" className="fadeInDown animate">
      <div className="container">
        <div className="row">
          <header className="header__container">
            <h1 className="header__title color">
              Australia's most used movie platform
            </h1>
            <h3 className="header__sub-title">
              FIND WHAT TO WATCH TONIGHT WITH{" "}
              <span className="color">MOVIEFINDER</span>
            </h3>
            <div className="header__search">
              <form
                action=""
                className="header__search--form"
                onSubmit={(e) => submitMovies(e)}
              >
                <input
                  value={title}
                  name="title"
                  className="header__search--input"
                  type="search"
                  placeholder="Search the best movie you can watch tonight"
                  onChange={(event) => showMovies(event)}
                />
                <button
                  className="header__btn background__color click"
                  // onclick="showMovies(event)"
                >
                  <FontAwesomeIcon
                    icon="fa-solid fa-magnifying-glass"
                    className="search__btn"
                  />
                </button>
              </form>
              {/* <Link
                to="/movies"
                className="header__anchor background__color click"
              >
                <button
                  className="header__btn background__color"
                  // onclick="showMovies(event)"
                >
                  <FontAwesomeIcon
                    icon="fa-solid fa-magnifying-glass"
                    className="search__btn"
                  />
                </button>
              </Link> */}
            </div>
            <div className="header__img--container">
              <img className="header__img" src={MovieImage} alt="" />
            </div>
          </header>
        </div>
      </div>
    </section>
  );
}
export default HomePage;
