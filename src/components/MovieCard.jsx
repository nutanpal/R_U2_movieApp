import React from "react";
// destructure to make it reusable(destr movie from props)
const MovieCard = ({movie, list, addMovie, removeMovie}) => {
//5.3 check if the current movie is in our watchlist ?
//check if current movie id is in list
  const inWatchlist = list.filter((mov) => {
    return mov.id === movie.id;
  });

//5.4  conditional rendering of btn : if inwatchlist len = 0 render Addmovie btn otherwise render remove btn
const button = inWatchlist.length === 0 ? (
  <button onClick ={() => addMovie(movie)}>Add to List</button> // npfix: fixed onClick  c---C btn not working
  ) : (
    <button onClick = {() => removeMovie(movie)}>Remove from list</button>
  );

return(
    <div className="movie-card">
      <div>
        <img src = {`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
        <h3>{movie.original_title}</h3>
        </div>  
       {button}
    </div>
    );
    
    };
    
    export default MovieCard;