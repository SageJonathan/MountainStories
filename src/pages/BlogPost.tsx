import React from "react";
import { useParams } from "react-router-dom";
import ScreenReader from "../components/ScreenReader";

// Import all blog post components
import SwissAlpsAdventure from "./Blog_posts/TravelEntries/swiss-alps-adventure";
import ItalianDolomites from "./Blog_posts/TravelEntries/italian-dolomites";
import FrenchPyrenees from "./Blog_posts/TravelEntries/french-pyrenees";
import FirstAscent from "./Blog_posts/AlpineEntries/first-ascent";
import MountainWeather from "./Blog_posts/AlpineEntries/mountain-weather";
import SoloInTheAlps from "./Blog_posts/AlpineEntries/solo-in-the-alps";

// Define valid categories and slugs
type Category = "travel-stories" | "alpine-journal";
type TravelSlug =
  | "swiss-alps-adventure"
  | "italian-dolomites"
  | "french-pyrenees";
type AlpineSlug = "first-ascent" | "mountain-weather" | "solo-in-the-alps";

const BlogPost: React.FC = () => {
  const { category, slug } = useParams<{
    category: Category;
    slug: TravelSlug | AlpineSlug;
  }>();

  // Map of blog post components
  const blogPosts: Record<Category, Record<string, React.FC>> = {
    "travel-stories": {
      "swiss-alps-adventure": SwissAlpsAdventure,
      "italian-dolomites": ItalianDolomites,
      "french-pyrenees": FrenchPyrenees,
    },
    "alpine-journal": {
      "first-ascent": FirstAscent,
      "mountain-weather": MountainWeather,
      "solo-in-the-alps": SoloInTheAlps,
    },
  };

  // Get the appropriate component based on category and slug
  const PostComponent =
    category && slug ? blogPosts[category]?.[slug] : undefined;

  if (!PostComponent) {
    return (
      <div className="blog-post">
        <h1>Post Not Found</h1>
        <p>The requested blog post could not be found.</p>
      </div>
    );
  }

  return <PostComponent />;
};

export default BlogPost;
