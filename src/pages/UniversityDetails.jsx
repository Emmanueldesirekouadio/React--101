import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useFavorites from "../context/useFavorites";
import { universityKey } from "../utils/universityKey";
import UniversityDetailsSkeleton from "../components/UniversityDetailsSkeleton";

function buildDetailsUrl(country, name) {
  const c = encodeURIComponent(country);
  const n = encodeURIComponent(name);
  return ` http://universities.hipolabs.com/search?country=${c}&name=${n}`;
}

export default function UniversityDetails() {
  const { country = "", name = "" } = useParams();
  const { isFavorite, toggleFavorite } = useFavorites();

  const url = buildDetailsUrl(country, name);
  const { data, loading, error } = useFetch(url);

  const list = Array.isArray(data) ? data : [];
  const university =
    list.find((u) => u?.name === name && u?.country === country) ?? list[0] ?? null;

  const key = university
    ? universityKey(university.country, university.name)
    : universityKey(country, name);

  return (
    <div className="grid gap-4">
      <div className="flex items-center justify-between gap-3">
        <Link className="text-sm font-semibold text-indigo-700 hover:text-indigo-800" to="/universities">
          ← Retour
        </Link>
        <button
          type="button"
          onClick={() => toggleFavorite(key)}
          className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
        >
          {isFavorite(key) ? "Retirer des favoris" : "Ajouter aux favoris"}
        </button>
      </div>

      {loading ? <UniversityDetailsSkeleton /> : null}
      {error ? (
        <div className="text-sm font-medium text-red-600">
          Erreur: {String(error?.message ?? error)}
        </div>
      ) : null}

      {!loading && !error && !university ? (
        <div className="text-sm text-slate-600">Aucun détail trouvé.</div>
      ) : null}

      {!loading && !error && university ? (
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-extrabold tracking-tight text-slate-900">{university.name}</h2>

          <div className="mt-4 grid gap-3 text-sm text-slate-800">
            <div>
              <span className="font-semibold">Pays:</span> {university.country} ({university.alpha_two_code})
            </div>
            <div>
              <span className="font-semibold">État/Province:</span> {university["state-province"] ?? "—"}
            </div>
            <div>
              <span className="font-semibold">Domaine(s):</span>{" "}
              {Array.isArray(university.domains) && university.domains.length > 0
                ? university.domains.join(", ")
                : "—"}
            </div>
            <div className="grid gap-2">
              <span className="font-semibold">Site(s) web:</span>
              {Array.isArray(university.web_pages) && university.web_pages.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {university.web_pages.map((p) => (
                    <a
                      key={p}
                      href={p}
                      target="_blank"
                      rel="noreferrer"
                      className="break-all rounded-md bg-slate-100 px-2 py-1 text-indigo-700 hover:text-indigo-800"
                    >
                      {p}
                    </a>
                  ))}
                </div>
              ) : (
                <span>—</span>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

