import React, { useState } from 'react';
import { FaSun, FaMoon, FaRedo } from 'react-icons/fa';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import Favourites from './components/Favourites';
import movies from './data';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [favourites, setFavourites] = useState([]);
  const [theme, setTheme] = useState('light');

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    movie.year.toString().includes(searchTerm) ||
    movie.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFavourite = (id) => {
    setFavourites(prev =>
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  const resetSearch = () => setSearchTerm('');
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <div className={`App ${theme}`}>
      <button onClick={toggleTheme} className="btn-theme">
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </button>
      <h1>Movie Database</h1>
      <div className="controls">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <button onClick={resetSearch} className="btn-reset"><FaRedo /> Reset</button>
      </div>
      {searchTerm === '' ? (
        <p>Start typing to search for movies.</p>
      ) : (
        <MovieList movies={filteredMovies} favourites={favourites} toggleFavourite={toggleFavourite} />
      )}
      <Favourites movies={movies} favourites={favourites} toggleFavourite={toggleFavourite} />
    </div>
  );
}

export default App;