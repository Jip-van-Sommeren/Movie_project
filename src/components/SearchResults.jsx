import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Movie from "./Movie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Navigate } from "react-router-dom";
// import Result from "../assets/undraw_search_re_x5gq (1).svg";

function LoadMovie({ input }) {
  const [movie, setMovie] = useState([]);
  const [filter, setFilter] = useState("");
  const [index, setIndex] = useState(1);
  // console.log(index);
  // console.log(input);
  let arr = [];

  function filterMovies(event) {
    setFilter(event.target.value);
  }

  function filterArray(array) {
    if (filter === "Year") {
      const filterMovies = array.sort((a, b) => {
        return b.Year - a.Year;
      });
    } else if (filter === "Title_AZ") {
      const filterMovies = array.sort((a, b) => {
        return a.Title.localeCompare(b.Title);
      });
    } else if (filter === "Title_ZA") {
      const filterMovies = array.sort((a, b) => {
        return b.Title.localeCompare(a.Title);
      });
    } else {
      return array;
    }
  }
  async function main(input, index) {
    if (input) {
      for (let i = 1; i <= index; i++) {
        // let arr = [];
        const { data } = await axios.get(
          `http://www.omdbapi.com/?i=tt3896198&apikey=4a5e3559&s=${input}&page=${i}`
        );
        arr = arr.concat(data.Search);
        filterArray(arr);

        arr.length > 0 && setMovie(arr);
      }
    }
  }

  //   console.log(movie.Search.map((movie) => movie.Title));

  useEffect(() => {
    main(input, index);
  }, [index, input, filter]);
  // console.log(movie);
  // console.log(arr);

  // function moreOptionsClick() {
  //   setIndex(index + 1);
  // }
  // useEffect(() => {
  //   return <Navigate to="/movies" />;
  // }, [input]);
  // input && console.log(true);
  console.log(movie.length);
  if (movie.length > 0 && input) {
    return (
      <section className="search__result" id="search__results">
        <div className="search container search__container">
          <div className="movie__row">
            <div className="search__nav--bar">
              <h1 id="search__result--header">Search results for: {input}</h1>
              <div className="search__sort--item">
                <select
                  id="filter"
                  onChange={(event) => filterMovies(event)}
                  defaultValue="DEFAULTVALUE"
                >
                  <option value="DEFAULTVALUE">Sort</option>
                  <option value="Year">Year</option>
                  <option value="Title_AZ">Title A-Z</option>
                  <option value="Title_ZA">Title Z-A</option>
                </select>
                <span className="focus"></span>
                <div className="search__divide--bar"></div>
              </div>
            </div>
            {/* <div className="movie__loading--item">
              <i className="fa-solid fa-spinner"></i>
            </div> */}
            <div className="movie__containers">
              {movie
                .map((user) => (
                  <Movie
                    key={user.imdbID}
                    title={user.Title}
                    poster={user.Poster}
                    year={user.Year}
                  />
                ))
                .slice(0, Math.floor(movie.length / 4) * 4)}
            </div>
            <div className="movies__more--options">
              <button
                className="more__options--btn click"
                onClick={() => setIndex(index + 1)}
              >
                More options
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  } else if (movie.length === 0 && input) {
    return (
      <section className="search__result" id="search__results">
        <div className="search container search__container">
          <div className="movie__row">
            {/* Loading */}
            <div className="movie__loading--item">
              <FontAwesomeIcon
                icon="fa-solid fa-spinner"
                className="movie__loading"
              />
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className="search__result" id="search__results">
        <div className="search container search__container">
          <div className="movie__row">
            <div className="search__noresult--wrapper">
              <h1 className="search__noresult--header">
                Find Your favorite <span className="color">Movie</span>
              </h1>
              {/* <figure className="search__noresult--img--wrapper">
                <img src={Result} alt="" className="search__noresult--img" />
              </figure> */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LoadMovie;
