import { useEffect, useState } from "react";
import { getUserInfo, getUserRating, getUpcomingContests } from "../cf/services/cfApi";

import PerformanceCards from "../cf/components/PerformanceCards";
import RatingChart from "../cf/components/RatingCharts";
import InsightsPanel from "../cf/components/InsightsPanel";
import ContestHistory from "../cf/components/ContestHistory";
import UpcomingContests from "../cf/components/UpcomingContests";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [ratingData, setRatingData] = useState([]);
  const [contests, setContests] = useState([]);

  const handle = "tourist";

  useEffect(() => {
    const fetch = async () => {
      setUser(await getUserInfo(handle));
      setRatingData(await getUserRating(handle));
      setContests(await getUpcomingContests());
    };
    fetch();
  }, []);

  return (
    <div className="space-y-8">
      <PerformanceCards user={user} ratingData={ratingData} />

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <RatingChart ratingData={ratingData} />
        </div>
        <InsightsPanel ratingData={ratingData} />
      </div>

      <ContestHistory ratingData={ratingData} />
      <UpcomingContests contests={contests} />
    </div>
  );
}
