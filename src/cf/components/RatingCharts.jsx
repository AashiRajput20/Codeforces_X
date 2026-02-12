import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { getMonthlyData } from "../utils/ratingHelper";

export default function RatingChart({ ratingData }) {
  const data = getMonthlyData(ratingData);

  return (
    <div className="card bg-base-200 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Rating Progress</h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="label" tick={{ fontSize: 12 }} />

            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="rating"
              stroke="#7c3aed"
              strokeWidth={2}
              dot={{ r: 2 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
