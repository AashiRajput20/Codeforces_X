export default function StatisticsSection({ ratingData }) {
  if (!ratingData.length) return null;

  const gains = ratingData.map(r => r.newRating - r.oldRating);
  const positive = gains.filter(g => g > 0).length;
  const negative = gains.filter(g => g < 0).length;

  return (
    <div className="bg-base-200 p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-6">
        Performance Statistics
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <p className="text-sm opacity-70">Contests Won Rating</p>
          <p className="text-2xl font-bold text-success">
            {positive}
          </p>
        </div>

        <div>
          <p className="text-sm opacity-70">Contests Lost Rating</p>
          <p className="text-2xl font-bold text-error">
            {negative}
          </p>
        </div>

        <div>
          <p className="text-sm opacity-70">Total Contests</p>
          <p className="text-2xl font-bold">
            {ratingData.length}
          </p>
        </div>
      </div>
    </div>
  );
}
