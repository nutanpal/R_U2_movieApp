import React from "react";
import MovieCard from "./MovieCard"; //ms and mc are at same level components
//4.1 Inside mScreen component , destructure props to parameters

const MovieScreen = ({
  movieList,
  page,
  setPage,
  list,
  addMovie,
  removeMovie,
}) => {
  const increment = () => setPage(page + 1);
  const decrement = () => setPage(page - 1);

  //2.4 To see movies! return m-title  and display all movies in movie-container after display
  //2.4 create var MDisplay = mlist mapped return {mtitle}

  const movieDisplay = movieList.map((movie, index) => {
    // return <h2>{movie.original_title}</h2>
    return (
    <MovieCard movie={movie} addMovie={addMovie} list={list} removeMovie = {removeMovie}/>
    );
  });

  //2.4 All movies displayed is mcontainer after adding
  // 5.3 create 2 btns (previous and Next)insiide div btn-container
  //5.6 attach func setpage +- 1 to onclick event btns
  return (
    <div className="page">
      <h1> Newton's Movie Theater </h1>
      <h3> Add a movie to your watchlist </h3>

      <div className="btn-container">
        <button onClick = {page !== 1 && decrement}>Previous</button>
        <button onClick = {increment}>Next</button>
      </div>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
};

export default MovieScreen;
