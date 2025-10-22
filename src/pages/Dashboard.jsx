import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import "./Dashboard.css";

const BASE_URL = import.meta.env.VITE_API_URL;

const Dashboard = () => {
  const [movieList, setMovieList] = useState([]);
  const [upcomingList, setUpcomingList] = useState([]);
  const [loadingMovies, setLoadingMovies] = useState(true);
  const [loadingUpcoming, setLoadingUpcoming] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const fetchMovies = async () => {
    try {
      const [moviesRes, upcomingRes] = await Promise.all([
        axios.get(`${BASE_URL}/movies`),
        axios.get(`${BASE_URL}/upcomingMovies`),
      ]);

      setMovieList(moviesRes.data);
      setUpcomingList(upcomingRes.data);
      setLastUpdated(new Date());
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoadingMovies(false);
      setLoadingUpcoming(false);
    }
  };

  useEffect(() => {
    fetchMovies();
    const interval = setInterval(fetchMovies, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDeleteMovie = async (id, isUpcoming = false) => {
    try {
      const endpoint = isUpcoming ? "upcomingMovies" : "movies";
      await axios.delete(`${BASE_URL}/${endpoint}/${id}`);
      if (isUpcoming) {
        setUpcomingList((prev) => prev.filter((movie) => movie.id !== id));
      } else {
        setMovieList((prev) => prev.filter((movie) => movie.id !== id));
      }
    } catch (error) {
      console.error("Failed to delete movie:", error);
    }
  };

  const handleEditMovie = async (id, isUpcoming = false) => {
    const newTitle = prompt("Enter new movie title:");
    if (newTitle) {
      try {
        const endpoint = isUpcoming ? "upcomingMovies" : "movies";
        await axios.patch(`${BASE_URL}/${endpoint}/${id}`, { title: newTitle });
        if (isUpcoming) {
          setUpcomingList((prev) =>
            prev.map((movie) =>
              movie.id === id ? { ...movie, title: newTitle } : movie
            )
          );
        } else {
          setMovieList((prev) =>
            prev.map((movie) =>
              movie.id === id ? { ...movie, title: newTitle } : movie
            )
          );
        }
      } catch (error) {
        console.error("Failed to edit movie:", error);
      }
    }
  };

  return (
    <div className="dashboard">
      <div className="polling-indicator">
        <div className="polling-dot"></div>
        Live Updates — Last updated: {lastUpdated.toLocaleTimeString()}
      </div>

      <h1>🎬 Now Showing</h1>
      <div className="movies-container">
        {loadingMovies ? (
          <p>Loading movies...</p>
        ) : movieList.length > 0 ? (
          movieList.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onDelete={() => handleDeleteMovie(movie.id, false)}
              onEdit={() => handleEditMovie(movie.id, false)}
            />
          ))
        ) : (
          <p>No movies available. Check back soon!</p>
        )}
      </div>

      <h1>🚀 Coming Soon</h1>
      <div className="movies-container upcoming">
        {loadingUpcoming ? (
          <p>Loading upcoming movies...</p>
        ) : upcomingList.length > 0 ? (
          upcomingList.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isUpcoming
              onDelete={() => handleDeleteMovie(movie.id, true)}
              onEdit={() => handleEditMovie(movie.id, true)}
            />
          ))
        ) : (
          <p>Exciting new movies coming soon! Stay tuned.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
