import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

// import { Link } from "react-router-dom";

function SearchBar() {
  // const { state } = useLocation();
  const [title, setTitle] = useState("");
  // const { title } = state;
  function onSearchChange(event) {
    console.log(event.target.value);
    setTitle(event.target.value);
  }

  function submitMovie(e) {
    console.log(e);
    console.log(title);
    // e.preventDefault();
  }
  return (
    <div className="mov-header__container animate fadeInDown">
      <h1 className="mov-header__title color__white">Browse our Movies</h1>
      <div className="mov-header__search--container">
        <div className="mov-header__search">
          <form
            action=""
            className="mov-header__search--form"
            onSubmit={(e) => submitMovie(e)}
          >
            <input
              value={title}
              name="title"
              className="mov-header__search--input"
              type="search"
              placeholder="Search the best movie you can watch tonight"
              onChange={(event) => onSearchChange(event)}
            />
            <button
              className="mov-header__btn background__color click"
              // onclick="showMovies(event)"
            >
              <FontAwesomeIcon
                icon="fa-solid fa-magnifying-glass"
                className="mov-search__btn"
              />
            </button>
          </form>
        </div>
        {/* <p id="errorMessage"></p> */}
      </div>
    </div>
  );
}

export default SearchBar;
