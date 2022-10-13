import { Box, Text } from "@chakra-ui/react";
import useMovies from "../../hooks/useMovies";
import Movie from "../Movie";
import { Grid, GridItem } from "@chakra-ui/react";

const MovieList = () => {
  const { newMovieData, isLoading } = useMovies();
  console.log(newMovieData, "data");
  const imgSrc = "https://www.themoviedb.org/t/p/w188_and_h282_bestv2/";

  return (
    <>
      <Box mt="2rem">
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {newMovieData?.results?.map((movie) => {
            return (
              <>
                <GridItem w="100%" h="100%">
                  <Movie
                    key={movie?.id}
                    title={movie?.original_title}
                    releaseDate={movie?.release_date}
                    img={`${imgSrc}${movie?.poster_path}`}
                  />
                </GridItem>
              </>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default MovieList;
