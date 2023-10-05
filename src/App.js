import React from "react";
import "./App.sass";
import "./fonts.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArticleList from "./components/HomePage/ArticleList";

function App() {
  return (
    <Router>
      <div>
        <div className="navbar">
          <div className="bolded-text">Make MyNews your homepage</div>
          <div className="discover">
            Every day discover what is trending on the internet!
          </div>
          <div className="bolded-text">
            No, thanks <button className="button-get">Get</button>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/category/:categoryId" element={<CategoryPage />} /> */}
          <Route path="/category/:categoryId" element={<ArticleList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
