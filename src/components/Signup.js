import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle, FaMoon, FaSun } from "react-icons/fa";
import "./Signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/register", { name, email, password });
      alert("Signup successful! Please login.");
      navigate("/login");
    } catch (err) {
      alert("Error during signup. Try again.");
    }
  };

  return (
    <div className={`signup-container ${darkMode ? "dark-mode" : ""}`}>
      {/* Dark Mode Icon Toggle */}
      <span className="dark-mode-icon" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </span>

      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <div className="input-box">
          <input type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} required />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <FaEnvelope className="icon" />
        </div>
        <div className="input-box">
          <input type={showPassword ? "text" : "password"} placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          {showPassword ? <FaEyeSlash className="icon" onClick={() => setShowPassword(false)} /> : <FaEye className="icon" onClick={() => setShowPassword(true)} />}
        </div>
        <button type="submit">Sign Up</button>
        <button type="button" className="google-btn">
          <FaGoogle /> Sign Up with Google
        </button>
      </form>
      <p>Already have an account? <span onClick={() => navigate("/login")}>Login</span></p>
    </div>
  );
};

export default Signup;
