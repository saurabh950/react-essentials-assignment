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

  const filteredMovies = movies.filter(movie => {
    const term = searchTerm.trim().toLowerCase();
    return (
      movie.title.toLowerCase().includes(term) ||
      movie.year.toString().includes(term) ||
      movie.genre.toLowerCase().includes(term) ||
      (movie.tags && movie.tags.some(tag => tag.toLowerCase().includes(term)))
    );
  });

  const toggleFavourite = (id) => {
    setFavourites(prev =>
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  const resetSearch = () => setSearchTerm('');
  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  return (
    <div className={`App ${theme}`}>
      <button onClick={toggleTheme} className="btn-theme">
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </button>

      <div className="panel">
        <header className="panel-header">
          <h1>Movie Explorer</h1>
          <p className="subtitle">Search, filter, and favorite movies. Designed for a single-page React component structure.</p>
        </header>

        <div className="controls">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <button onClick={resetSearch} className="btn-reset"><FaRedo /> Reset</button>
        </div>

        {searchTerm !== '' && <div className="results-count">{filteredMovies.length} results for "{searchTerm}"</div>}

        <div className="panel-grid">
          <section className="left">
            <div className="section-heading">
              <h2>Matching Movies</h2>
            </div>
            <MovieList movies={searchTerm === '' ? movies : filteredMovies} favourites={favourites} toggleFavourite={toggleFavourite} />
          </section>
          <aside className="right">
            <div className="section-heading">
              <h2>Favorite Movies</h2>
            </div>
            <Favourites movies={movies} favourites={favourites} toggleFavourite={toggleFavourite} />
          </aside>
        </div>
      </div>
    </div>
  );
}

export default App;