import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "20px" }}>
      <Link to="/">Accueil</Link>
      <Link to="/about">À propos</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;