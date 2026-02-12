export default function RatingCard({ user }) {
  return (
    <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg border border-zinc-800">
      <h2 className="text-lg font-semibold mb-4">User Overview</h2>

      <div className="space-y-2">
        <p><span className="text-zinc-400">Handle:</span> {user.handle}</p>
        <p><span className="text-zinc-400">Current Rating:</span> {user.rating}</p>
        <p><span className="text-zinc-400">Max Rating:</span> {user.maxRating}</p>
        <p><span className="text-zinc-400">Rank:</span> {user.rank}</p>
      </div>
    </div>
  );
}
