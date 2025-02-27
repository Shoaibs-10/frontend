import React from "react";
import "./Navbar.css"; // Import CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>CampusKart</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/marketplace">Marketplace</a></li>
        <li><a href="/pgfinder">PG Finder</a></li>
        <li><a href="/ride">Ride Sharing</a></li>
        <li><a href="/login" className="login-btn">Login</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
