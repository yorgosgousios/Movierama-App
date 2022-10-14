import { useQuery } from "react-query";
import { getPopularSeries } from "../services/series";

export default function useSeries() {
  const queryKey = ["series"];

  const { data: seriesData, isLoading } = useQuery(
    queryKey,
    async () => {
      const movieResponse = await getPopularSeries();
      return movieResponse.data;
    },
    {
      refetchOnMount: false,
    }
  );

  return { seriesData, isLoading };
}
