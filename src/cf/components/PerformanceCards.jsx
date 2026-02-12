export default function PerformanceCards({ user, ratingData }) {
  if (!user) return null;

  const last = ratingData[ratingData.length - 1];
  const change = last ? last.newRating - last.oldRating : 0;

  const cards = [
    { title: "Current Rating", value: user.rating },
    { title: "Max Rating", value: user.maxRating },
    { title: "Total Contests", value: ratingData.length },
    {
      title: "Last Change",
      value: change > 0 ? `+${change}` : change,
      color: change > 0 ? "text-success" : "text-error",
    },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-6">
      {cards.map((card, i) => (
        <div key={i} className="card bg-base-200 shadow-xl border-l-4 border-primary">
          <div className="card-body">
            <h2 className="card-title text-sm opacity-70">
              {card.title}
            </h2>
            <p className={`text-2xl font-bold ${card.color || ""}`}>
              {card.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
