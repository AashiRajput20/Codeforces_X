import { useState, useEffect } from "react";
import { Grid, Container } from "@mui/material";
import PerformanceCards from "cf/components/PerformanceCards";
import RatingChart from "cf/components/RatingChart";
import ContestHistory from "cf/components/ContestHistory";
import InsightsPanel from "cf/components/InsightsPanel";
import UpcomingContests from "cf/components/UpcomingContests";
import {
  getUserInfo,
  getUserRating,
  getUpcomingContests,
} from "cf/services/cfApi";

export default function Dashboard() {
  const [handle, setHandle] = useState("tourist");
  const [user, setUser] = useState(null);
  const [ratingData, setRatingData] = useState([]);
  const [contests, setContests] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const u = await getUserInfo(handle);
      const r = await getUserRating(handle);
      const c = await getUpcomingContests();
      setUser(u);
      setRatingData(r);
      setContests(c);
    };
    fetch();
  }, [handle]);

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <PerformanceCards
            user={user}
            ratingData={ratingData}
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <RatingChart ratingData={ratingData} />
        </Grid>

        <Grid item xs={12} md={4}>
          <InsightsPanel ratingData={ratingData} />
        </Grid>

        <Grid item xs={12}>
          <ContestHistory ratingData={ratingData} />
        </Grid>

        <Grid item xs={12}>
          <UpcomingContests contests={contests} />
        </Grid>
      </Grid>
    </Container>
  );
}
