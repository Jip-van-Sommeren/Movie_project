import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import IMBDLogo from "../assets/IMDB_Logo_2016.svg";
import RTLogo from "../assets/Rotten_Tomatoes_logo.svg";
import MCLogo from "../assets/Metacritic_logo.svg";

function MovieDetail() {
  const ApiAdress = "http://www.omdbapi.com/?i=tt3896198&apikey=4a5e3559&t=";
  //   const title = "Big Fat Liar";
  const { state } = useLocation();
  const { title } = state;
  title.replace(" ", "%20");
  console.log(title);
  const [movie, setMovie] = useState({});
  async function main(title) {
    const { data } = await axios.get(`${ApiAdress}${title}`);
    data.IMDBRating = data.Ratings[0].Value;
    data.RTRating = data.Ratings[1].Value;
    data.MCRating = data.Ratings[2].Value;
    console.log(data);
    setMovie(data);
  }

  useEffect(() => {
    main(title);
  }, [title]);
  //   console.log(movie.Ratings[0].Value);
  //   main();
  return (
    <>
      <h1 className="film__title color">{movie.Title}</h1>
      <div className="film__desc--container">
        <div className="film__desc--wrapper">
          <div className="film__desc">{movie.Year}</div>
          <div className="film__desc">{movie.Rated}</div>
          <div className="film__desc">{movie.Runtime}</div>
        </div>
      </div>

      <figure className="film__img--container">
        <img className="film__img" src={movie.Poster} alt="" />
      </figure>
      <div className="film__details--wrapper">
        <div className="film__genre color">{movie.Genre}</div>

        <p className="film__plot">{movie.Plot}</p>
        <div className="film__detail">
          <span className="color">Director</span> {movie.Director}
        </div>
        <div className="film__detail">
          <span className="color">Writer</span> {movie.Writer}
        </div>
        <div className="film__detail">
          <span className="color">Stars</span> {movie.Actors}
        </div>
      </div>
      <div className="film__ratings">
        <div className="film__rating">
          <div className="film__rating--logo-wrapper">
            <img src={IMBDLogo} alt="" className="film__rating--logo" />
          </div>
          <div className="film__rating--score">{movie.IMDBRating}</div>
        </div>
        <div className="film__rating">
          <div className="film__rating--logo-wrapper">
            <img src={RTLogo} alt="" className="film__rating--logo" />
          </div>
          <div className="film__rating--score">{movie.RTRating}</div>
        </div>
        <div className="film__rating">
          <div className="film__rating--logo-wrapper">
            <img src={MCLogo} alt="" className="film__rating--logo" />
          </div>
          <div className="film__rating--score">{movie.MCRating}</div>
        </div>
      </div>
    </>
  );
}

export default MovieDetail;
