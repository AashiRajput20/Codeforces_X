export const getMonthlyData = (data) => {
  const map = {};

  data.forEach((item) => {
    const date = new Date(item.ratingUpdateTimeSeconds * 1000);
    const key = `${date.getFullYear()}-${date.getMonth()}`;

    map[key] = {
      label: date.toLocaleString("default", {
        month: "short",
        year: "numeric",
      }),
      rating: item.newRating,
    };
  });

  return Object.values(map);
};
