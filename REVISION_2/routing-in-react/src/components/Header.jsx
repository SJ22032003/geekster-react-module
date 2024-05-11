import { Link, Outlet } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <Link to="/home">
          <li>Home</li>
          </Link>
          <Link to="about">
          <li>About</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
