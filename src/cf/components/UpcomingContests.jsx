export default function UpcomingContests({ contests }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {contests.slice(0, 3).map((c) => (
        <div key={c.id} className="card bg-base-200 shadow-xl border-l-4 border-primary">
          <div className="card-body">
            <h2 className="card-title text-sm">
              {c.name}
            </h2>
            <p className="text-xs opacity-70">
              {new Date(c.startTimeSeconds * 1000).toLocaleString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
