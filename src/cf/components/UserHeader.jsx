export default function UserHeader({ user }) {
  if (!user) return null;

  const getRankColor = (rating) => {
    if (rating >= 2400) return "text-red-500";
    if (rating >= 2100) return "text-orange-500";
    if (rating >= 1900) return "text-purple-500";
    if (rating >= 1600) return "text-blue-500";
    if (rating >= 1400) return "text-cyan-500";
    if (rating >= 1200) return "text-green-500";
    return "text-gray-400";
  };

  return (
    <div className="bg-base-200 p-8 rounded-xl shadow-lg">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

        <div>
          <h1 className={`text-4xl font-bold ${getRankColor(user.rating)}`}>
            {user.handle}
          </h1>

          <p className="opacity-70 mt-2">
            Rank: {user.rank}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 text-right">
          <div>
            <p className="text-sm opacity-70">Current Rating</p>
            <p className="text-2xl font-bold">
              {user.rating}
            </p>
          </div>

          <div>
            <p className="text-sm opacity-70">Max Rating</p>
            <p className="text-2xl font-bold">
              {user.maxRating}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
