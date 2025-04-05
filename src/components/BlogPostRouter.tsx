import React from "react";
import { Routes, Route } from "react-router-dom";
import BergSlawinski from "../pages/Blog_posts/AlpineEntries/BergSlawinski";
import SwissAlpsAdventure from "../pages/Blog_posts/TravelEntries/swiss-alps-adventure";
import ItalianDolomites from "../pages/Blog_posts/TravelEntries/italian-dolomites";
import FrenchPyrenees from "../pages/Blog_posts/TravelEntries/french-pyrenees";
import Cerberus from "../pages/Blog_posts/AlpineEntries/Cerberus";
import Yamnuska from "../pages/Blog_posts/AlpineEntries/Yamnuska";
const BlogPostRouter: React.FC = () => {
  return (
    <Routes>
      {/* Alpine Journal Routes */}
      <Route path="/berg-slawinski" element={<BergSlawinski />} />
      <Route path="/cerberus" element={<Cerberus />} />
      <Route path="/yamnuska-whipper" element={<Yamnuska />} />

      {/* Travel Stories Routes */}
      <Route path="/swiss-alps-adventure" element={<SwissAlpsAdventure />} />
      <Route path="/italian-dolomites" element={<ItalianDolomites />} />
      <Route path="/french-pyrenees" element={<FrenchPyrenees />} />
    </Routes>
  );
};

export default BlogPostRouter;
