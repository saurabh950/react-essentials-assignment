import React from 'react';
import MovieCard from './MovieCard';

function Favourites({ movies, favourites, toggleFavourite }) {
  const favMovies = movies.filter(movie => favourites.includes(movie.id));

  if (favMovies.length === 0) {
    return <p>No favourite movies yet.</p>;
  }

  return (
    <>
    <h2>Favourite Movies</h2>
    <div className="favourites">
      {favMovies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isFavourite={true}
          toggleFavourite={toggleFavourite}
        />
      ))}
    </div>
    </>
  );
}

export default Favourites;