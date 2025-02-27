import React from "react";
import "./MarketplaceDashboard.css";

const MarketplaceDashboard = () => {
  // Dummy data for marketplace listings
  const listings = [
    { id: 1, name: "MacBook Air 2020", price: "₹65,000", seller: "Rahul" },
    { id: 2, name: "iPhone 12 Pro", price: "₹52,000", seller: "Aditi" },
    { id: 3, name: "Study Table", price: "₹2,500", seller: "Vikas" },
    { id: 4, name: "Guitar (Yamaha)", price: "₹9,000", seller: "Priya" },
  ];

  return (
    <div className="marketplace-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>CampusKart</h2>
        <ul>
          <li className="active">🛒 Marketplace</li>
          <li>🏠 PG Finder</li>
          <li>🚗 Ride Sharing</li>
          <li>📌 Gigs & Services</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="marketplace-content">
        <h2>Student Marketplace</h2>
        
        {/* Stats */}
        <div className="stats">
          <div className="stat-box">Total Listings: {listings.length}</div>
          <button className="add-listing-btn">+ Add New Listing</button>
        </div>

        {/* Recent Listings */}
        <div className="listings">
          {listings.map((item) => (
            <div key={item.id} className="listing-item">
              <h3>{item.name}</h3>
              <p>Price: {item.price}</p>
              <span>Seller: {item.seller}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketplaceDashboard;
