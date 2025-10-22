import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = ({ isAuthenticated }) => {
  const navigate = useNavigate();
  const [backgroundImage, setBackgroundImage] = useState(
    "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  );

  const handleDashboardClick = () => {
    if (isAuthenticated) {
      navigate("/dashboard");
    } else {
      navigate("/signup");
    }
  };

  const backgroundOptions = [
    {
      url: "https://wallpaperaccess.com/full/329633.jpg",
      name: "Cinematic"
    },
    {
      url: "https://images.unsplash.com/photo-1489599809505-7c8e1c8bfc0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      name: "Theater"
    },
    {
      url: "https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      name: "Movie Night"
    },
    {
      url: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      name: "Film Reel"
    },
    {
      url: "https://images.unsplash.com/photo-1574267423440-2daf0ac6b42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      name: "Hollywood"
    },
    {
      url: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      name: "Neon Cinema"
    }
  ];

  const handleBackgroundChange = (url) => {
    setBackgroundImage(url);
  };

  const handleCustomBackground = () => {
    const customUrl = prompt("Enter custom background image URL:");
    if (customUrl) {
      setBackgroundImage(customUrl);
    }
  };

  // Sample movie data
  const featuredMovies = [
    {
      id: 1,
      title: "The Matrix Resurrections",
      year: 2023,
      rating: 4.2,
      genre: "Sci-Fi",
      image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=450&fit=crop"
    },
    {
      id: 2,
      title: "Dune: Part Two",
      year: 2024,
      rating: 4.5,
      genre: "Adventure",
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=300&h=450&fit=crop"
    },
    {
      id: 3,
      title: "Spider-Man: No Way Home",
      year: 2023,
      rating: 4.3,
      genre: "Action",
      image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=450&fit=crop"
    },
    {
      id: 4,
      title: "Avatar: The Way of Water",
      year: 2023,
      rating: 4.1,
      genre: "Fantasy",
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=300&h=450&fit=crop"
    }
  ];

  const upcomingMovies = [
    {
      id: 5,
      title: "Guardians of the Galaxy Vol. 3",
      year: 2024,
      genre: "Action",
      releaseDate: "May 5, 2024"
    },
    {
      id: 6,
      title: "The Flash",
      year: 2024,
      genre: "Superhero",
      releaseDate: "June 16, 2024"
    },
    {
      id: 7,
      title: "Indiana Jones 5",
      year: 2024,
      genre: "Adventure",
      releaseDate: "June 30, 2024"
    }
  ];

  return (
    <div 
      className="home-container"
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      {/* Background Selector
      <div className="background-selector">
        <div className="selector-header">
          <span>🎨 Change Background</span>
          <button className="custom-bg-btn" onClick={handleCustomBackground}>
            Custom URL
          </button>
        </div>
        <div className="background-options">
          {backgroundOptions.map((option, index) => (
            <div
              key={index}
              className={`background-option ${backgroundImage === option.url ? 'active' : ''}`}
              onClick={() => handleBackgroundChange(option.url)}
              style={{ backgroundImage: `url(${option.url})` }}
              title={option.name}
            >
              <span className="option-name">{option.name}</span>
            </div>
          ))}
        </div>
      </div> */}

      {/* Centered Welcome Section */}
      <section className="welcome-section">
        <div className="welcome-content">
          <h1>🎬 Welcome to Movie App</h1>
          <p>Discover the world of cinema. Explore current movies, upcoming releases, and manage your favorite films.</p>
          <div className="welcome-buttons">
            <button className="cta-button" onClick={handleDashboardClick}>
              Go to Dashboard
            </button>
            <button className="secondary-button">
              Explore Movies
            </button>
          </div>
          <div className="welcome-stats">
            <div className="stat-item">
              <h3>10K+</h3>
              <p>Movies</p>
            </div>
            <div className="stat-item">
              <h3>5K+</h3>
              <p>Users</p>
            </div>
            <div className="stat-item">
              <h3>500+</h3>
              <p>Reviews Daily</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Movies Section */}
      {/* <section className="movies-section">
        <div className="section-overlay">
          <div className="section-header">
            <h2>🔥 Featured Movies</h2>
            <p>Curated selection of must-watch films</p>
          </div>
          <div className="movies-grid">
            {featuredMovies.map(movie => (
              <div key={movie.id} className="movie-card">
                <div className="movie-image">
                  <img src={movie.image} alt={movie.title} />
                  <div className="movie-rating">
                    ⭐ {movie.rating}
                  </div>
                </div>
                <div className="movie-info">
                  <h3>{movie.title}</h3>
                  <div className="movie-meta">
                    <span className="movie-year">{movie.year}</span>
                    <span className="movie-genre">{movie.genre}</span>
                  </div>
                  <button className="watch-trailer-btn">
                    Watch Trailer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Combined Content Section */}
      <section className="combined-section">
        <div className="combined-overlay">
          <div className="combined-content">
            
            {/* Upcoming Movies */}
            <div className="combined-column">
              <div className="section-header">
                <h2>📅 Coming Soon</h2>
                <p>Get ready for these exciting releases</p>
              </div>
              <div className="upcoming-list">
                {upcomingMovies.map(movie => (
                  <div key={movie.id} className="upcoming-item">
                    <div className="upcoming-info">
                      <h3>{movie.title}</h3>
                      <p>{movie.genre} • {movie.releaseDate}</p>
                    </div>
                    <button className="remind-me-btn">
                      ⏰ Remind Me
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="combined-column">
              <div className="section-header">
                <h2>🌟 Why Choose Movie App?</h2>
              </div>
              <div className="features-grid">
                <div className="feature-card">
                  <div className="feature-icon">🎭</div>
                  <h3>Vast Collection</h3>
                  <p>Access thousands of movies from classic to latest releases</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">⭐</div>
                  <h3>Curated Reviews</h3>
                  <p>Read genuine reviews from critics and movie lovers</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">🔔</div>
                  <h3>Release Alerts</h3>
                  <p>Get notified when your favorite movies are released</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">🎪</div>
                  <h3>Personal Dashboard</h3>
                  <p>Track your watched movies and create watchlists</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="combined-column">
              <div className="section-header">
                <h2>🚀 Ready to Explore?</h2>
                <p>Join thousands of movie enthusiasts</p>
              </div>
              <div className="cta-content">
                <p>Never miss a great film again. Start your cinematic journey today.</p>
                <button className="cta-button-large" onClick={handleDashboardClick}>
                  Start Your Journey
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Movie App</h3>
            <p>Your ultimate destination for movie exploration and management.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/signup">Dashboard</a></li>
              <li><a href="/admin-login">Admin</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Features</h4>
            <ul>
              <li>Browse Movies</li>
              <li>Upcoming Releases</li>
              <li>Admin Panel</li>
              <li>User Dashboard</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect With Us</h4>
            <div className="social-links">
              <span>📘</span>
              <span>🐦</span>
              <span>📷</span>
              <span>🎬</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Movie App. All rights reserved. | Made with ❤️ for movie lovers</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;