import React from "react";
import { Routes, Route } from "react-router-dom";
import BergSlawinski from "../pages/Blog_posts/AlpineEntries/BergSlawinski";
import MountainWeather from "../pages/Blog_posts/AlpineEntries/mountain-weather";
import SoloInTheAlps from "../pages/Blog_posts/AlpineEntries/solo-in-the-alps";
import SwissAlpsAdventure from "../pages/Blog_posts/TravelEntries/swiss-alps-adventure";
import ItalianDolomites from "../pages/Blog_posts/TravelEntries/italian-dolomites";
import FrenchPyrenees from "../pages/Blog_posts/TravelEntries/french-pyrenees";

const BlogPostRouter: React.FC = () => {
  return (
    <Routes>
      {/* Alpine Journal Routes */}
      <Route path="/berg-slawinski" element={<BergSlawinski />} />
      <Route path="/mountain-weather" element={<MountainWeather />} />
      <Route path="/solo-in-the-alps" element={<SoloInTheAlps />} />

      {/* Travel Stories Routes */}
      <Route path="/swiss-alps-adventure" element={<SwissAlpsAdventure />} />
      <Route path="/italian-dolomites" element={<ItalianDolomites />} />
      <Route path="/french-pyrenees" element={<FrenchPyrenees />} />
    </Routes>
  );
};

export default BlogPostRouter;
