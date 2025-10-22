import React, { useState, useEffect } from "react";

const AdminMovieForm = ({ movie, onSubmit, onCancel, isUpcoming = false }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    releaseYear: new Date().getFullYear(),
    genre: "",
    duration: "",
    rating: "",
    imageUrl: ""
  });

  useEffect(() => {
    if (movie) {
      setFormData({
        title: movie.title || "",
        description: movie.description || "",
        releaseYear: movie.releaseYear || new Date().getFullYear(),
        genre: movie.genre || "",
        duration: movie.duration || "",
        rating: movie.rating || "",
        imageUrl: movie.imageUrl || ""
      });
    }
  }, [movie]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitData = movie ? { ...formData, id: movie.id, isUpcoming } : formData;
    onSubmit(submitData, isUpcoming);
    if (!movie) {
      setFormData({
        title: "",
        description: "",
        releaseYear: new Date().getFullYear(),
        genre: "",
        duration: "",
        rating: "",
        imageUrl: ""
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="admin-form">
      <div className="form-group">
        <label>Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <textarea name="description" value={formData.description} onChange={handleChange} rows="3" />
      </div>
      <div className="form-group">
        <label>Release Year:</label>
        <input type="number" name="releaseYear" value={formData.releaseYear} onChange={handleChange} min="1900" max="2030" required />
      </div>
      <div className="form-group">
        <label>Genre:</label>
        <input type="text" name="genre" value={formData.genre} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Duration (minutes):</label>
        <input type="number" name="duration" value={formData.duration} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Rating:</label>
        <input type="text" name="rating" value={formData.rating} onChange={handleChange} placeholder="PG, PG-13, R, etc." />
      </div>
      <div className="form-group">
        <label>Image URL:</label>
        <input type="url" name="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="https://example.com/image.jpg" />
      </div>

      <div className="form-actions">
        {onCancel && <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</button>}
        <button type="submit" className="btn btn-primary">{movie ? "Update" : isUpcoming ? "Add Upcoming Movie" : "Add Movie"}</button>
      </div>
    </form>
  );
};

export default AdminMovieForm;
