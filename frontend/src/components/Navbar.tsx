import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>StridAlgo</h2>

      <div>
        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;