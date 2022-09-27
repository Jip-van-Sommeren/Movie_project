import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function Movie({ title, poster, year }) {
  const [detailFilm, setDetailFilm] = useState(undefined);
  const [redirect, setRedirect] = useState(false);
  function openFilmTitle(event) {
    console.log(event.target.innerText);
    setDetailFilm(event.target.value);
    setRedirect(true);
  }
  function openFilmImage(event) {
    console.log(event.target.parentElement.previousElementSibling.innerText);
    setDetailFilm(event.target.parentElement.previousElementSibling.innerText);
    setRedirect(true);
  }
  if (redirect) {
    // setRedirect(false);
    return (
      <Navigate to={`/movies/${detailFilm}`} state={{ title: detailFilm }} />
    );
  }
  return (
    <div className="movie__container">
      <div className="movie__title" onClick={(event) => openFilmTitle(event)}>
        {title}
      </div>
      <div
        className="movie__img--container"
        // onclick="imageFilm(event)"
      >
        <img
          className="movie__img"
          src={poster}
          alt=""
          onClick={(event) => openFilmImage(event)}
        />
      </div>

      <div className="movie__year">{year}</div>
    </div>
  );
}

export default Movie;
