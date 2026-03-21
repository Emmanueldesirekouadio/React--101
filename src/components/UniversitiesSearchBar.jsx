export default function UniversitiesSearchBar({
  country,
  name,
  onlyFavorites,
  onCountryChange,
  onNameChange,
  onOnlyFavoritesChange,
  onSearch,
  onReset,
  onFocus,
  countryInputRef,
}) {
  return (
    <div className="grid gap-4 rounded-xl border border-slate-200 bg-white p-4  ">
      <div className="grid gap-2">
        <label className="text-sm font-medium text-slate-800" htmlFor="country">
          Pays
        </label>
        <input
          id="country"
          ref={countryInputRef}
          value={country}
          onChange={(e) => onCountryChange(e.target.value)}
          placeholder="ex: Morocco"
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium text-slate-800" htmlFor="name">
          Nom (optionnel)
        </label>
        <input
          id="name"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          placeholder="ex: technology"
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <label className="flex items-center gap-2 text-sm text-slate-800">
        <input
          type="checkbox"
          checked={onlyFavorites}
          onChange={(e) => onOnlyFavoritesChange(e.target.checked)}
          className="h-4 w-4 accent-indigo-600"
        />
        Afficher seulement les favoris
      </label>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={onSearch}
          className="rounded-lg bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
        >
          Rechercher
        </button>
        <button
          type="button"
          onClick={onReset}
          className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
        >
          Réinitialiser
        </button>
        <button
          type="button"
          onClick={onFocus}
          className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
        >
          Focus
        </button>
      </div>
    </div>
  );
}
