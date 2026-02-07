import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
<nav className="navbar">
      <div className="navbar-container">

        <Link to="/" className="brand">
          <h1>Love Nature</h1>
        </Link>

        <div className="nav-links">
          {/* <Link to="/" className="nav-item">Home</Link> */}
          <Link to="/sports" className="nav-item">Nature Sports</Link>
        </div>
      </div>
    </nav>
  );
}
