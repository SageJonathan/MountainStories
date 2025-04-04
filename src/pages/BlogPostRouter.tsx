import React from "react";
import { Routes, Route } from "react-router-dom";
import FirstAscent from "./Blog_posts/AlpineEntries/first-ascent";
import MountainWeather from "./Blog_posts/AlpineEntries/mountain-weather";
import SoloInTheAlps from "./Blog_posts/AlpineEntries/solo-in-the-alps";
import SwissAlpsAdventure from "./Blog_posts/TravelEntries/swiss-alps-adventure";
import ItalianDolomites from "./Blog_posts/TravelEntries/italian-dolomites";
import FrenchPyrenees from "./Blog_posts/TravelEntries/french-pyrenees";

const BlogPostRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/first-ascent" element={<FirstAscent />} />
      <Route path="/mountain-weather" element={<MountainWeather />} />
      <Route path="/solo-in-the-alps" element={<SoloInTheAlps />} />
      <Route path="/swiss-alps-adventure" element={<SwissAlpsAdventure />} />
      <Route path="/italian-dolomites" element={<ItalianDolomites />} />
      <Route path="/french-pyrenees" element={<FrenchPyrenees />} />
    </Routes>
  );
};

export default BlogPostRouter;
