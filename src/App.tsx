import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import AlpineJournal from "./pages/AlpineJournal";
import TravelStories from "./pages/TravelStories";
import Poetry from "./pages/Poetry";
import About from "./pages/About";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/alpine-journal" element={<AlpineJournal />} />
            <Route path="/travel-stories" element={<TravelStories />} />
            <Route path="/poetry" element={<Poetry />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <footer className="footer">
          <div className="footer-content">
            <a href="mailto:your.email@example.com" className="footer-link">
              <i className="fas fa-envelope"></i>
              Email
            </a>
            <a
              href="https://www.instagram.com/your-profile"
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
