import { useEffect, useMemo, useRef, useState } from "react";
import useFetch from "../hooks/useFetch";
import useFavorites from "../context/useFavorites";
import { universityKeyFromUniversity } from "../utils/universityKey";
import UniversitiesSearchBar from "../components/UniversitiesSearchBar";
import UniversityCard from "../components/UniversityCard";
import UniversitiesSkeleton from "../components/UniversitiesSkeleton";

function buildUniversitiesUrl(country, name) {
  const trimmedCountry = country.trim();
  const trimmedName = name.trim();
  if (!trimmedCountry) return null;

  const c = encodeURIComponent(trimmedCountry);
  const n = encodeURIComponent(trimmedName);
  return `https://universities.hipolabs.com/search?country=${c}${trimmedName ? `&name=${n}` : ""}`;
}

export default function Universities() {
  const [country, setCountry] = useState("Morocco");
  const [name, setName] = useState("");
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [url, setUrl] = useState(() => buildUniversitiesUrl("Morocco", ""));

  const countryInputRef = useRef(null);
  useEffect(() => {
    countryInputRef.current?.focus();
  }, []);

  const { data, loading, error } = useFetch(url);
  const { favorites } = useFavorites();

  const results = useMemo(() => (Array.isArray(data) ? data : []), [data]);

  const filtered = useMemo(() => {
    if (!onlyFavorites) return results;
    const favoritesSet = new Set(favorites);
    return results.filter((u) => favoritesSet.has(universityKeyFromUniversity(u)));
  }, [favorites, onlyFavorites, results]);

  function onSearch() {
    setUrl(buildUniversitiesUrl(country, name));
  }

  function onReset() {
    setCountry("");
    setName("");
    setOnlyFavorites(false);
    setUrl(null);
    countryInputRef.current?.focus();
  }

  return (
    <div className="grid gap-6">
      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <h1 className="text-xl font-extrabold tracking-tight text-slate-900">Annuaire des universités</h1>
        <p className="mt-2 text-sm text-slate-600">
          Recherche par pays (+ nom optionnel), ajout en favoris, et navigation vers une page détail.
        </p>
      </div>

      <UniversitiesSearchBar
        country={country}
        name={name}
        onlyFavorites={onlyFavorites}
        onCountryChange={setCountry}
        onNameChange={setName}
        onOnlyFavoritesChange={setOnlyFavorites}
        onSearch={onSearch}
        onReset={onReset}
        onFocus={() => countryInputRef.current?.focus()}
        countryInputRef={countryInputRef}
      />

      {!url ? (
        <div className="text-sm text-slate-600">Saisissez un pays puis cliquez sur Rechercher.</div>
      ) : null}

      {loading ? <UniversitiesSkeleton /> : null}
      {error ? (
        <div className="text-sm font-medium text-red-600">Erreur: {String(error?.message ?? error)}</div>
      ) : null}

      {!loading && !error && url ? (
        <div className="grid gap-3">
          <div className="text-sm text-slate-600">{filtered.length} résultat(s)</div>
          <div className="grid gap-3">
            {filtered.map((u) => (
              <UniversityCard key={universityKeyFromUniversity(u)} university={u} />
            ))}
          </div>
          {filtered.length === 0 ? <div className="text-sm text-slate-600">Aucun résultat.</div> : null}
        </div>
      ) : null}
    </div>
  );
}

