import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Poetry from "./pages/Poetry";
import TravelStories from "./pages/TravelStories";
import AlpineJournal from "./pages/AlpineJournal";
import GlobeScene from "./components/GlobeScene";

// Import blog post pages
import FirstAscent from "./pages/Blog_posts/AlpineEntries/first-ascent";
import MountainWeather from "./pages/Blog_posts/AlpineEntries/mountain-weather";
import SoloInTheAlps from "./pages/Blog_posts/AlpineEntries/solo-in-the-alps";
import SwissAlpsAdventure from "./pages/Blog_posts/TravelEntries/swiss-alps-adventure";
import ItalianDolomites from "./pages/Blog_posts/TravelEntries/italian-dolomites";
import FrenchPyrenees from "./pages/Blog_posts/TravelEntries/french-pyrenees";

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/poetry" element={<Poetry />} />
            <Route path="/travel-stories" element={<TravelStories />} />
            <Route path="/alpine-journal" element={<AlpineJournal />} />
            <Route path="/globe" element={<GlobeScene />} />

            {/* Alpine Journal Routes */}
            <Route
              path="/alpine-journal/first-ascent"
              element={<FirstAscent />}
            />
            <Route
              path="/alpine-journal/mountain-weather"
              element={<MountainWeather />}
            />
            <Route
              path="/alpine-journal/solo-in-the-alps"
              element={<SoloInTheAlps />}
            />

            {/* Travel Stories Routes */}
            <Route
              path="/travel-stories/swiss-alps-adventure"
              element={<SwissAlpsAdventure />}
            />
            <Route
              path="/travel-stories/italian-dolomites"
              element={<ItalianDolomites />}
            />
            <Route
              path="/travel-stories/french-pyrenees"
              element={<FrenchPyrenees />}
            />
          </Routes>
        </main>
        <footer className="footer">
          <div className="footer-content">
            <a
              href="mailto:sagejonathan.tesol@gmail.com"
              className="footer-link"
            >
              <i className="fas fa-envelope"></i>
              Email
            </a>
            <a
              href="https://www.instagram.com/wandering_mapachito"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <i className="fab fa-instagram"></i>
              Instagram
            </a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
