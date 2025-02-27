import React, { useState } from "react";
import { FaBars, FaSearch, FaUserCircle, FaMoon, FaSun, FaSignOutAlt, FaCog } from "react-icons/fa";
import "./Dashboard.css";

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className={`dashboard ${darkMode ? "dark-mode" : ""}`}>
      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="toggle-btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <FaBars />
        </div>
        <ul>
          <li>🏠 Home</li>
          <li>🛍 Marketplace</li>
          <li>🚗 Ride Sharing</li>
          <li>🏠 PG Finder</li>
          <li>📢 Community Forum</li>
          <li>🎫 Events</li>
          <li>💼 Volunteer & Paid Gigs</li> {/* New Feature */}
        </ul>
      </aside>

      {/* Main Content */}
      <main>
        {/* Navbar */}
        <nav className="top-navbar">
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search..." />
          </div>
          <div className="nav-icons">
            <span className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <FaSun /> : <FaMoon />}
            </span>
            
            <div className="profile-container">
              <FaUserCircle className="profile-icon" onClick={() => setProfileOpen(!profileOpen)} />
              
              {/* Profile Dropdown */}
              {profileOpen && (
                <div className="profile-dropdown">
                  <div className="dropdown-item"><FaCog /> Settings</div>
                  <div className="dropdown-item"><FaSignOutAlt /> Logout</div>
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* Dashboard Cards */}
        <div className="dashboard-content">
          <div className="card">🛒 Student Marketplace</div>
          <div className="card">🚗 Ride Sharing</div>
          <div className="card">🏠 PG Finder</div>
          <div className="card">📢 Community Forum</div>
          <div className="card">🎫 Event Ticketing</div>
          <div className="card">💼 Volunteer & Paid Gigs</div> {/* Added */}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
