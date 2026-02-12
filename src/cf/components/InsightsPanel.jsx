export default function InsightsPanel({ ratingData }) {
  if (!ratingData || ratingData.length === 0) return null;

  const total = ratingData.length;
  const gains = ratingData.map(
    (r) => r.newRating - r.oldRating
  );

  const avg = (
    gains.reduce((a, b) => a + b, 0) / total
  ).toFixed(1);

  const best = Math.max(...gains);

  return (
    <div className="card bg-base-200 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Insights</h2>
        <p>Total Contests: {total}</p>
        <p>Average Rating Change: {avg}</p>
        <p>Best Improvement: +{best}</p>
        <p>
          Trend: {avg >= 0 ? "📈 Improving" : "📉 Needs Work"}
        </p>
      </div>
    </div>
  );
}
