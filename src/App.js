/*
1. Import and use useEffect and axios
    2. Create component(MScreen.jsx) to Display Movies
3. Import MovieScreen to App.js and pass props inside root fun App()
4. destructure props into parameters and display movie
*/

import "./App.css";
//1.import useEffect and useState from react
import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header";
import MovieScreen from "./components/MovieScreen";
import Watchlist from "./components/Watchlist";

function App() {
  // 2.create states -3: movie[],watchlst/list[],page init@1
  const [list, setList] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);

  const addMovie = (movie) => setList([...list, movie]); //QQ setlist...?
  ///////QQ??
  const removeMovie = (movie) => {
    const newState = list.filter((mov) => {
      return mov !== movie;
    });
    setList(newState);
  };

  // 3.fun getdata make axios call to api(.get,``obj literal) and save result in movielst state
  //https://api.themoviedb.org/3/movie/550?api_key=de----eg api request

  //QQ explain api key literalwhy popular? is page cmd standard

  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      )
      .then((res) => {
        console.log(res.data.results);
        setMovieList(res.data.results);
      });
  };

  //Invoke getData inside of your useEffect, and add page as a dependency to your useEffect
  useEffect(() => {
    getData();
  }, [page]);

  // 2.3 Inside of App/return create main tag and place movieScreen component inside it. Pass props  List, Page, setPage, MovieList to it.
  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen
          //removeMovie={removeMovie}
          addMovie={addMovie}
          movieList={movieList}
          page={page}
          setPage={setPage} // QQ what is setPage?
          list={list}
          removeMovie={removeMovie}
        />
        <Watchlist list={list} removeMovie={removeMovie} />
      </main>
    </div>
  );
}

export default App;
