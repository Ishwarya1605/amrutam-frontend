import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa"; 
import "../styles/Login.scss";

export default function Login() {
  const [email, setEmail] = useState(localStorage.getItem("userEmail") || "");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("userEmail"));

  useEffect(() => {
    if (localStorage.getItem("userEmail")) {
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }
    setError("");
    localStorage.setItem("userEmail", email);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    setLoggedIn(false);
    setEmail("");
    setPassword("");
  };

  if (loggedIn) {
    return (
      <div className="login-page">
        <div className="login-card">
          <FaUserCircle size={60} color="#3A643C" />
          <h2>Welcome!</h2>
          <p className="welcome-msg">
            You are logged in as <strong>{localStorage.getItem("userEmail")}</strong>
          </p>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          {error && <p className="error">{error}</p>}

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="signup-text">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
}
