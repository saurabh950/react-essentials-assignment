import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies, favourites, toggleFavourite }) {
  if (movies.length === 0) {
    return <p>No movies found.</p>;
  }

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isFavourite={favourites.includes(movie.id)}
          toggleFavourite={toggleFavourite}
        />
      ))}
    </div>
  );
}

export default MovieList;