import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import AlpineJournal from "./pages/AlpineJournal";
import TravelStories from "./pages/TravelStories";
import Poetry from "./pages/Poetry";
import BlogPost from "./pages/BlogPost";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/alpine-journal" element={<AlpineJournal />} />
            <Route path="/travel-stories" element={<TravelStories />} />
            <Route path="/poetry" element={<Poetry />} />
            <Route path="/blog/:category/:slug" element={<BlogPost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
