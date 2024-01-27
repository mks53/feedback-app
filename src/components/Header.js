import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h2>Feedback App</h2>
        </Link>
      </div>
    </header>
  );
}

export default Header;
