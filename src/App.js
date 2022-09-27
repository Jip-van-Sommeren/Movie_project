import React from "react";
import Home from "./pages/Home";
import MovieOptions from "./pages/MovieOptions";
import MovieDetails from "./pages/MovieDetails";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/" element={<MovieOptions />} />
        <Route path="/movies/:detailFilm" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
