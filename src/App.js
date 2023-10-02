import React from "react";
import "./App.css";
import "./App.sass";
import "./fonts.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <Router>
      <div>
        <div className="container">
          <div className="navbar"></div>
          <div className="search-bar">
            <span className="logo">Logo</span>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
              />
              <button className="search-button">Search</button>
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
