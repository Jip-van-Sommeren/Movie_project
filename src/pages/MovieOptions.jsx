import React, { useEffect, useState } from "react";
import {
  useLocation,
  // useNavigate,
  // useNavigation,
  useNavigationType,
  // useParams,
} from "react-router-dom";
import MovieHeader from "../components/MovieHeader";
import SearchResults from "../components/SearchResults";
import Footer from "../components/Footer";

function MovieOptions() {
  function NavRoute(state, search) {
    if (state) {
      const { title } = state;
      return title;
    } else {
      const title = search.slice(7);
      return title;
    }
  }

  function Movie() {
    const { state, search } = useLocation();
    const title = NavRoute(state, search);
    const [input, setInput] = useState(undefined);
    const navigation = useNavigationType();
    // console.log(navigation);
    useEffect(() => {
      navigation !== "REPLACE" && setInput(title);
    }, [title, navigation]);
    // console.log(input);s
    if (input) {
      console.log(input);
      return input;
    }
  }
  // Movie();
  // Movie();
  //   useEffect(() => (title = null), []);
  return (
    <>
      <MovieHeader />
      <SearchResults input={Movie()} />
      <Footer />
    </>
  );
}

export default MovieOptions;
