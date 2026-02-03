import React from 'react';

function MovieCard({ movie, isFavourite, toggleFavourite }) {
  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <p>{movie.year} - {movie.genre}</p>
      <p className="rating">Rating: {movie.rating}/10</p>
      <button onClick={() => toggleFavourite(movie.id)}>
        {isFavourite ? 'Unfavourite' : 'Favourite'}
      </button>
    </div>
  );
}

export default MovieCard;