import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import RatingChart from "./components/RatingChart";
import ContestCard from "./components/ContestCard";
import { getUserInfo, getUserRating, getContests } from "./services/api";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [handle, setHandle] = useState("tourist");
  const [user, setUser] = useState(null);
  const [ratingData, setRatingData] = useState([]);
  const [contests, setContests] = useState([]);

  // Apply dark class to root html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userInfo = await getUserInfo(handle);
        const rating = await getUserRating(handle);
        const upcoming = await getContests();

        setUser(userInfo);
        setRatingData(rating);
        setContests(upcoming.slice(0, 6));
      } catch (err) {
        console.error("Error fetching data", err);
      }
    };

    fetchData();
  }, [handle]);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-zinc-950 dark:text-zinc-100 transition-colors duration-300">

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        setHandle={setHandle}
      />

      <div className="p-8 space-y-10">

        {/* Rating Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          <div className="lg:col-span-2">
            <RatingChart data={ratingData} />
          </div>

          <div className="p-6 rounded-2xl border 
              bg-white border-gray-200 
              dark:bg-zinc-900 dark:border-zinc-800">

            <h2 className="text-lg font-semibold mb-4">
              Performance Summary
            </h2>

            {user && (
              <div className="space-y-3 text-gray-600 dark:text-zinc-400">
                <p>Handle: {user.handle}</p>
                <p>Current Rating: {user.rating}</p>
                <p>Max Rating: {user.maxRating}</p>
                <p>Total Contests: {ratingData.length}</p>
              </div>
            )}
          </div>

        </div>

        {/* Upcoming Contests */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Upcoming Contests
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contests.map((contest) => (
              <ContestCard
                key={contest.id}
                name={contest.name}
                startTimeSeconds={contest.startTimeSeconds}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
