<<<<<<< HEAD
import React, { useState } from "react";
import { HashRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import "./App.css"; // Import the CSS file

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  return (
    <Router>
      {/* Navigation Bar */}
      <nav className="app-nav">
        <div className="app-nav-links">
          <Link to="/" className="app-nav-link app-nav-link-home">Home</Link>
          <Link to="/dashboard" className="app-nav-link app-nav-link-dashboard">Dashboard</Link>
          <Link to="/admin-login" className="app-nav-link app-nav-link-admin">Admin</Link>
        </div>
      </nav>

      {/* Page Content */}
      <div className="app-content">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route 
            path="/signup" 
            element={<SignUp setIsAuthenticated={setIsAuthenticated} />} 
          />
          <Route 
            path="/dashboard" 
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/signup" />} 
          />

          {/* Admin Login */}
          <Route 
            path="/admin-login" 
            element={<AdminLogin setIsAdminAuthenticated={setIsAdminAuthenticated} />} 
          />

          {/* Protected Admin Route */}
          <Route 
            path="/admin" 
            element={isAdminAuthenticated ? <Admin /> : <Navigate to="/admin-login" />} 
          />

          {/* Redirect unknown routes to home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
=======


// HERE Step.jsx is created in pages folder but it should be in components folder


import * as React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Header from './Components/Header';
import LandingPage from './Pages/LandingPage';
import ResumeGenerator from './Pages/ResumeGenerator';
import Form from './Pages/Form';
import PageNotFound from './Pages/PageNotFound';
import History from './Pages/History';
import Footer from './Components/Footer';


function App() {


  return (
    <>
    <Header/>

    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/resume' element={<ResumeGenerator/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route path='/history' element={<History/>}/>
      <Route path='/*' element={<PageNotFound/>}/>
    </Routes>

    <Footer/>
    </>
  )
}

export default App
>>>>>>> 237674ead8d4c53a7d2359f95ec9cd6cc5513a1b
