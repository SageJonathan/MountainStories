import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-brand">
        <Link to="/">Mountain Stories</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/alpine-journal">Alpine Journal</Link>
        </li>
        <li>
          <Link to="/travel-stories">Travel Stories</Link>
        </li>
        <li>
          <Link to="/poetry">Poetry</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
