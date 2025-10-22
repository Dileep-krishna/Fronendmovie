import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; // ✅ Import SweetAlert2
import "./SignUp.css";

// ✅ LoginModal component
const LoginModal = ({ isOpen, onClose, onLogin }) => {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!loginUsername || !loginPassword) {
      Swal.fire({
        title: "Error!",
        text: "Enter username and password",
        icon: "error",
        confirmButtonText: "OK"
      });
      return;
    }
    onLogin(loginUsername, loginPassword);

    Swal.fire({
      title: "Login Successful!",
      text: `Welcome back, ${loginUsername}!`,
      icon: "success",
      confirmButtonText: "Go to Dashboard"
    });

    setLoginUsername("");
    setLoginPassword("");
  };

  return (
    <div className={`login-modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Username:</label>
            <input 
              type="text" 
              value={loginUsername} 
              onChange={(e) => setLoginUsername(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label>Password:</label>
            <input 
              type="password" 
              value={loginPassword} 
              onChange={(e) => setLoginPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

// ✅ SignUp component with SweetAlert
const SignUp = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!username || !password || !confirmPassword) {
      Swal.fire({
        title: "Error!",
        text: "Please fill all fields",
        icon: "error",
        confirmButtonText: "OK"
      });
      return;
    }

    if (password !== confirmPassword) {
      Swal.fire({
        title: "Error!",
        text: "Passwords do not match",
        icon: "error",
        confirmButtonText: "OK"
      });
      return;
    }

    setIsAuthenticated(true);

    Swal.fire({
      title: "Sign Up Successful!",
      text: `Welcome, ${username}!`,
      icon: "success",
      confirmButtonText: "Go to Dashboard"
    }).then(() => {
      navigate("/dashboard");
    });
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    setIsLoginOpen(false);
    Swal.fire({
      title: "Login Successful!",
      text: `Welcome back!`,
      icon: "success",
      confirmButtonText: "Go to Dashboard"
    }).then(() => {
      navigate("/dashboard");
    });
  };

  const handleLoginClick = () => {
    setIsLoginOpen(true);
  };

  return (
    <div className="signup-page with-bg-image">
      <h2>Create Your Account</h2>
      <form onSubmit={handleSignUp} className="signup-form">
        <div>
          <label>Username:</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>

      <p className="login-text">
        Already have an account?{" "}
        <button className="login-btn" onClick={handleLoginClick}>
          Login
        </button>
      </p>

      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
        onLogin={handleLogin} 
      />
    </div>
  );
};

export default SignUp;
