import { useQuery } from "react-query";
import { getNewMovies } from "../services/movie";

export default function useMovies() {
  const queryKey = ["movies"];

  const { data: newMovieData, isLoading } = useQuery(
    queryKey,
    async () => {
      const movieResponse = await getNewMovies();
      return movieResponse.data;
    },
    {
      refetchOnMount: false,
    }
  );

  return { newMovieData, isLoading };
}
