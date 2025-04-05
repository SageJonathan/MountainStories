import React from "react";
import { Routes, Route } from "react-router-dom";
import BergSlawinski from "../pages/Blog_posts/AlpineEntries/BergSlawinski";
import Cerberus from "../pages/Blog_posts/AlpineEntries/Cerberus";
import Yamnuska from "../pages/Blog_posts/AlpineEntries/Yamnuska";
import Roraima from "../pages/Blog_posts/TravelEntries/Roraima";
import RedEarth from "../pages/Blog_posts/TravelEntries/RedEarth";
import Dharma from "../pages/Blog_posts/TravelEntries/Dharma";
const BlogPostRouter: React.FC = () => {
  return (
    <Routes>
      {/* Alpine Journal Routes */}
      <Route path="/berg-slawinski" element={<BergSlawinski />} />
      <Route path="/cerberus" element={<Cerberus />} />
      <Route path="/yamnuska-whipper" element={<Yamnuska />} />

      {/* Travel Stories Routes */}
      <Route path="/red-earth" element={<RedEarth />} />
      <Route path="/dharma" element={<Dharma />} />
      <Route path="/roraima" element={<Roraima />} />
    </Routes>
  );
};

export default BlogPostRouter;
