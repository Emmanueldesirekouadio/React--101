import { Link } from "react-router-dom";
import { RoutePage } from "../routes";

export default function NotFound() {
  return (
    <div className="grid gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h1 className="text-lg font-extrabold tracking-tight text-slate-900">Page introuvable</h1>
      <Link className="text-sm font-semibold text-indigo-700 hover:text-indigo-800" to={RoutePage.HOME}>
        Retour à l'accueil
      </Link>
    </div>
  );
}

