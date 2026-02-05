import React from 'react';
import { FaStar, FaHeart, FaRegHeart } from 'react-icons/fa';

function MovieCard({ movie, isFavourite, toggleFavourite }) {
  return (
    <div className={`movie-card ${isFavourite ? 'is-fav' : ''}`}>
      <div className="card-inner">
        <div className="card-body">
          <div className="title-row">
            <div className="title-meta">
              <h3>{movie.title} <span className="meta inline">{movie.year} · {movie.genre}</span></h3>
            </div>
            <button className={`fav-toggle ${isFavourite ? 'active' : ''}`} onClick={() => toggleFavourite(movie.id)}>
              {isFavourite ? <FaHeart /> : <FaRegHeart />} <span className="fav-text">{isFavourite ? 'Favorited' : 'Favorite'}</span>
            </button>
          </div>
          <div className="tags tag-group">
            <div className="card-left">
              <div className="rating-badge"><FaStar className="star" /> <span>{movie.rating}</span></div>
            </div>
            {movie.tags && movie.tags.map((t, i) => (
              <span key={i} className="tag-badge">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;