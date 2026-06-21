import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="logo">
          🏙️ StridAlgo
        </Link>

        <ul className="nav-links">
          <li>
            <a href="#features">Features</a>
          </li>

          <li>
            <a href="#timeline">How It Works</a>
          </li>

          <li>
            <a href="#city">City System</a>
          </li>

          <li>
            <a href="#leaderboard">Leaderboard</a>
          </li>
        </ul>

        <div className="nav-buttons">
          <Link to="/login">
            <button className="btn btn-secondary">
              Login
            </button>
          </Link>

          <Link to="/signup">
            <button className="btn btn-primary">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;