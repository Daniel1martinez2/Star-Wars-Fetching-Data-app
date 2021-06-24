import React, {useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] =useState([])
  const fetchMoviesHandler = () => {
    fetch('https://swapi.dev/api/films/')
    .then(response => {
      return response.json();
    }).then(data => {
      const transformedData = data.results.map(movie => {
        return {
          title: movie.title,
          id: movie.episode_id,
          openingText: movie.opening_crawl,
          releaseDate: movie.release_date
        }
      })
      setMovies(transformedData); 
    }) 
  }  
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
