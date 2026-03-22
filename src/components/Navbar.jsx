import { Link } from "react-router-dom";
import { RoutePage } from "../routes";

function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-3">
        <Link className="font-semibold text-slate-900" to="/">
          React-101
        </Link>
        <div className="h-5 w-px bg-slate-200" />
        <Link className="text-slate-700 hover:text-slate-900" to={RoutePage.HOME}>
          Accueil
        </Link>
        <Link className="text-slate-700 hover:text-slate-900" to={RoutePage.ABOUT}>
          À propos
        </Link>
        <Link className="text-slate-700 hover:text-slate-900" to={RoutePage.CONTACT}>
          Contact
        </Link>
        <Link className="text-slate-700 hover:text-slate-900" to={RoutePage.UNIVERSITIES}>
          Annuaire
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
