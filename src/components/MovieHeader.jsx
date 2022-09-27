import React from "react";
import Nav from "./Nav";
import SearchBackground from "./SearchBackground";
import SearchBar from "./SearchBar";

function MovieHeader() {
  return (
    <>
      <section className="mov_nav" id="mov_nav">
        <SearchBackground />
        <Nav />
        <SearchBar />
      </section>
    </>
  );
}

export default MovieHeader;
