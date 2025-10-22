import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./AdminLogin.css";

const AdminLogin = ({ setIsAdminAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [useBgImage, setUseBgImage] = useState(true); 
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
//admin login
   
    if (username === "admin" && password === "admin") {
      setIsAdminAuthenticated(true);

  
      Swal.fire({
        title: "Login Successful!",
        text: "Welcome, Admin!",
        icon: "success",
        confirmButtonText: "Go to Dashboard"
      }).then(() => {
        navigate("/admin"); 
      });

    } else {
    
      Swal.fire({
        title: "Login Failed",
        text: "Invalid username or password",
        icon: "error",
        confirmButtonText: "Try Again"
      });
    }
  };

  return (
    <div className={`admin-login-page ${useBgImage ? "with-bg-image" : ""}`}>
      <span className="admin-badge">Admin Portal</span>

      
      <button 
        className="background-toggle" 
        onClick={() => setUseBgImage(!useBgImage)}
      >
        {useBgImage ? "Disable Background" : "Enable Background"}
      </button>

 
      <button 
        className="back-home-btn"
        onClick={() => navigate("/")}
      >
        ⬅ Home
      </button>

      <h2>Admin Login</h2>

      <form onSubmit={handleLogin} className="admin-login-form">
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
