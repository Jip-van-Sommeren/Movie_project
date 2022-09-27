import React from "react";
import Nav from "../components/Nav";
import MovieDetail from "../components/MovieDetail";
import Footer from "../components/Footer";

function MovieDetails() {
  return (
    <>
      <Nav />
      <section id="film">
        <div className="container">
          <div className="row">
            <div className="animate fadeInDown film film__container">
              <MovieDetail />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default MovieDetails;
