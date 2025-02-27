import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css"; // 🎨 Import CSS
import { FaEnvelope, FaLock, FaMoon, FaSun } from "react-icons/fa"; // 🔥 Icons

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  // 🎯 Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/login", { email, password });
      localStorage.setItem("token", response.data.token);
      alert("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  // 🌙 Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      
      {/* 🔥 Dark Mode Toggle */}
      <div className="toggle-mode" onClick={toggleDarkMode}>
        {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </div>

      {error && <p className="error">{error}</p>}

      <form onSubmit={handleLogin}>
        
        {/* 📧 Email Field */}
        <div className="input-box">
          <FaEnvelope className="icon" />
          <input 
            type="email" 
            placeholder="Enter email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>

        {/* 🔒 Password Field */}
        <div className="input-box">
          <FaLock className="icon" />
          <input 
            type="password" 
            placeholder="Enter password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>

        {/* 🚀 Login Button */}
        <button type="submit">Login</button>
      </form>

      {/* 🔗 Signup Redirect */}
      <p>Don't have an account? <span onClick={() => navigate("/signup")}>Sign up</span></p>
    </div>
  );
};

export default Login;
