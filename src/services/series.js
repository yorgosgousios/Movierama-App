import axios from "axios";

export const getPopularSeries = () => {
  return axios({
    url: "https://api.themoviedb.org/3/tv/popular?api_key=bc50218d91157b1ba4f142ef7baaa6a0",
    method: "GET",
  });
};
