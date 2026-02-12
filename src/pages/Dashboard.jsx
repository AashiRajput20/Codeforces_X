import { useEffect, useState } from "react";
import {
  getUserInfo,
  getUserRating,
  getUpcomingContests,
} from "../cf/services/cfApi";
import UserHeader from "../cf/components/UserHeader";
import StatisticsSection from "../cf/components/StatisticsSection";

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
    <div className="space-y-16">
      <UserHeader user={user} />

      <section>
        <RatingChart ratingData={ratingData} />
      </section>

      <section>
        <StatisticsSection ratingData={ratingData} />
      </section>

      <section>
        <ContestHistory ratingData={ratingData} />
      </section>

      <section>
        <UpcomingContests contests={contests} />
      </section>
    </div>
  );
}
