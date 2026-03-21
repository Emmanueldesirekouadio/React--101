import { Link } from "react-router-dom";
import useFavorites from "../context/useFavorites";
import { universityKeyFromUniversity } from "../utils/universityKey";

export default function UniversityCard({ university }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const key = universityKeyFromUniversity(university);

  const country = university?.country ?? "";
  const name = university?.name ?? "";
  const linkTo = `/universities/${encodeURIComponent(country)}/${encodeURIComponent(name)}`;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="truncate font-semibold text-slate-900">{university.name}</div>
          <div className="mt-1 text-sm text-slate-600">{university.country}</div>
        </div>

        <button
          type="button"
          onClick={() => toggleFavorite(key)}
          className="shrink-0 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
          title="Favoris"
        >
          {isFavorite(key) ? "En favoris" : "Ajouter"}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
        {university.web_pages?.[0] ? (
          <a
            href={university.web_pages[0]}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-indigo-700 hover:text-indigo-800"
          >
            Site
          </a>
        ) : null}
        {university.domains?.[0] ? (
          <span className="rounded-md bg-slate-100 px-2 py-1 text-slate-700">
            {university.domains[0]}
          </span>
        ) : null}
        <Link className="font-medium text-indigo-700 hover:text-indigo-800" to={linkTo}>
          Détails
        </Link>
      </div>
    </div>
  );
}

