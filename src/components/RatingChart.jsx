import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function RatingChart({ data }) {
  // Convert timestamp to readable date
  const formattedData = data.map((item) => ({
    ...item,
    date: new Date(item.ratingUpdateTimeSeconds * 1000).toLocaleDateString(),
  }));

  return (
    <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 h-[400px]">
      <h2 className="text-lg font-semibold mb-4">Rating Progress</h2>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={formattedData}>
          <CartesianGrid stroke="#27272a" strokeDasharray="3 3" />

          <XAxis
            dataKey="date"
            tick={{ fill: "#a1a1aa", fontSize: 12 }}
            interval="preserveStartEnd"
          />

          <YAxis tick={{ fill: "#a1a1aa", fontSize: 12 }} />

          <Tooltip
            contentStyle={{
              backgroundColor: "#18181b",
              border: "1px solid #27272a",
            }}
          />

          <Line
            type="monotone"
            dataKey="newRating"
            stroke="#8b5cf6"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
