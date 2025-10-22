import React from "react";
import "./MovieCard.css";

const MovieCard = ({ movie, isUpcoming = false }) => {
  return (
    <div className={`movie-card ${isUpcoming ? "upcoming" : ""}`}>
      {isUpcoming && <div className="upcoming-badge">Coming Soon</div>}

      {movie.imageUrl ? (
        <img src={movie.imageUrl} alt={movie.title} className="movie-image" />
      ) : (
        <div className="movie-image-placeholder">{movie.title}</div>
      )}

      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <div className="movie-meta">
          <span className="movie-year">{movie.releaseYear}</span>
          {movie.rating && <span className="movie-rating">{movie.rating}</span>}
        </div>
        {movie.description && (
          <p className="movie-description">{movie.description}</p>
        )}
        <div className="movie-details">
          {movie.genre && <span className="movie-genre">{movie.genre}</span>}
          {movie.duration && (
            <span className="movie-duration">{movie.duration} min</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
