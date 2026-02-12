export default function ContestHistory({ ratingData }) {
  return (
    <div className="card bg-base-200 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Contest History</h2>

        <div className="overflow-x-auto">
          <table className="table table-zebra text-sm">
            <thead>
              <tr>
                <th>Contest</th>
                <th>Rank</th>
                <th>Old</th>
                <th>New</th>
                <th>Δ</th>
              </tr>
            </thead>
            <tbody>
              {ratingData
                .slice(-10)
                .reverse()
                .map((r, i) => {
                  const change = r.newRating - r.oldRating;
                  return (
                    <tr key={i}>
                      <td>
                        <a
                          href={`https://codeforces.com/contest/${r.contestId}`}
                          target="_blank"
                          className="link link-primary"
                        >
                          {r.contestName}
                        </a>
                      </td>

                      <td>{r.rank}</td>
                      <td>{r.oldRating}</td>
                      <td>{r.newRating}</td>
                      <td
                        className={
                          change > 0
                            ? "text-success"
                            : change < 0
                              ? "text-error"
                              : ""
                        }
                      >
                        {change > 0 ? `+${change}` : change}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
