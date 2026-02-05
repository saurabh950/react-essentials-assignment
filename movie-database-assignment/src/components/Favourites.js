import React from 'react';
import { FaHeart } from 'react-icons/fa';

function Favourites({ movies, favourites, toggleFavourite }) {
  const favMovies = movies.filter(movie => favourites.includes(movie.id));

  if (favMovies.length === 0) {
    return <p className="empty">You haven't added any favourites yet.</p>;
  }

  return (
    <div className="favourites-list">
      {favMovies.map(movie => (
        <button key={movie.id} className="fav-pill" onClick={() => toggleFavourite(movie.id)}>
          <FaHeart className="pill-heart" /> {movie.title} <span className="pill-year">({movie.year})</span>
        </button>
      ))}
    </div>
  );
}

export default Favourites;