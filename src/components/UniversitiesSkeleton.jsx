function CardSkeleton() {
  return (
    <div className="animate-pulse rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="h-5 w-3/5 rounded bg-slate-200" />
          <div className="mt-2 h-4 w-1/3 rounded bg-slate-200" />
        </div>
        <div className="h-9 w-24 rounded-lg bg-slate-200" />
      </div>
      <div className="mt-4 flex gap-2">
        <div className="h-6 w-16 rounded bg-slate-200" />
        <div className="h-6 w-24 rounded bg-slate-200" />
        <div className="h-6 w-16 rounded bg-slate-200" />
      </div>
    </div>
  );
}

export default function UniversitiesSkeleton({ count = 6 }) {
  return (
    <div className="grid gap-3">
      {Array.from({ length: count }).map((_, idx) => (
        <CardSkeleton key={idx} />
      ))}
    </div>
  );
}

