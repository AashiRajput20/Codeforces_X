export default function UpcomingContests({ contests }) {
  if (!contests || contests.length === 0) return null;

  return (
    <div className="bg-base-200 p-8 rounded-xl shadow-lg">

      {/* Section Title */}
      <h2 className="text-2xl font-semibold mb-6">
        Upcoming Contests
      </h2>

      {/* Contest Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {contests.slice(0, 3).map((contest) => (
          <div
            key={contest.id}
            className="card bg-base-100 shadow-md border border-base-300 hover:shadow-xl transition duration-300"
          >
            <div className="card-body">

              {/* Contest Name */}
              <h3 className="card-title text-sm font-semibold">
                {contest.name}
              </h3>

              {/* Start Time */}
              <p className="text-xs opacity-70">
                {new Date(
                  contest.startTimeSeconds * 1000
                ).toLocaleString()}
              </p>

              {/* Duration */}
              <p className="text-xs opacity-70">
                Duration: {Math.floor(contest.durationSeconds / 3600)} hrs
              </p>

              {/* Link */}
              <div className="card-actions justify-end mt-4">
                <a
                  href={`https://codeforces.com/contest/${contest.id}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm btn-primary"
                >
                  View
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
