import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminMovieForm from "../components/AdminMovieForm";
import "./Admin.css";

const BASE_URL = import.meta.env.VITE_API_URL;

const Admin = () => {
  const [movies, setMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [editMovie, setEditMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const [moviesRes, upcomingRes] = await Promise.all([
        axios.get(`${BASE_URL}/movies`),
        axios.get(`${BASE_URL}/upcomingMovies`)
      ]);
      setMovies(moviesRes.data);
      setUpcomingMovies(upcomingRes.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleAddOrEdit = async (movieData, isUpcoming = false) => {
    try {
      if (editMovie) {
        const endpoint = editMovie.isUpcoming ? "upcomingMovies" : "movies";
        await axios.put(`${BASE_URL}/${endpoint}/${editMovie.id}`, movieData);
        setEditMovie(null);
      } else {
        const endpoint = isUpcoming ? "upcomingMovies" : "movies";
        await axios.post(`${BASE_URL}/${endpoint}`, movieData);
      }
      fetchMovies();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id, isUpcoming = false) => {
    if (window.confirm("Are you sure you want to delete this movie?")) {
      try {
        const endpoint = isUpcoming ? "upcomingMovies" : "movies";
        await axios.delete(`${BASE_URL}/${endpoint}/${id}`);
        fetchMovies();
      } catch (err) {
        console.log(err);
      }
    }
  };

  const cancelEdit = () => {
    setEditMovie(null);
  };

  return (
    <div className="admin-page">
      <h1>🎬 Movie Admin Panel</h1>

      <div className="admin-form">
        <h2>{editMovie ? "Edit Movie" : "Add New Movie"}</h2>
        <AdminMovieForm
          movie={editMovie}
          onSubmit={handleAddOrEdit}
          onCancel={editMovie ? cancelEdit : null}
        />
      </div>

      <h2>Current Movies</h2>
      {loading ? (
        <div className="loading">Loading movies...</div>
      ) : (
        <div className="movies-list">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-item">
              <div className="movie-info">
                <strong>{movie.title}</strong>
                <span> ({movie.releaseYear})</span>
                {movie.genre && <span> • {movie.genre}</span>}
              </div>
              <div className="movie-actions">
                <button
                  className="btn btn-secondary"
                  onClick={() => setEditMovie(movie)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(movie.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <h2>Upcoming Movies</h2>
      {loading ? (
        <div className="loading">Loading upcoming movies...</div>
      ) : (
        <>
          <div className="movies-list">
            {upcomingMovies.map((movie) => (
              <div key={movie.id} className="movie-item">
                <div className="movie-info">
                  <strong>{movie.title}</strong>
                  <span> ({movie.releaseYear})</span>
                  {movie.genre && <span> • {movie.genre}</span>}
                </div>
                <div className="movie-actions">
                  <button
                    className="btn btn-secondary"
                    onClick={() => setEditMovie({ ...movie, isUpcoming: true })}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(movie.id, true)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="admin-form" style={{ marginTop: "2rem", background: "rgba(248, 249, 250, 0.9)" }}>
            <h3>Add Upcoming Movie</h3>
            <AdminMovieForm
              onSubmit={(movie) => handleAddOrEdit(movie, true)}
              isUpcoming
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Admin;
