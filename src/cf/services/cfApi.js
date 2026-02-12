import axios from "axios";

const API_BASE = "https://codeforces.com/api";

export const getUserInfo = async (handle) => {
  const res = await axios.get(`${API_BASE}/user.info?handles=${handle}`);
  return res.data.result[0];
};

export const getUserRating = async (handle) => {
  const res = await axios.get(`${API_BASE}/user.rating?handle=${handle}`);
  return res.data.result;
};

export const getUpcomingContests = async () => {
  const res = await axios.get(`${API_BASE}/contest.list`);
  return res.data.result.filter((c) => c.phase === "BEFORE");
};
