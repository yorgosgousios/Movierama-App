import { Box, Spinner, Text } from "@chakra-ui/react";
import useMovies from "../../hooks/useMovies";

import { Grid, GridItem } from "@chakra-ui/react";
import MovieItem from "../MovieItem";

const NowPlayingList = () => {
  const { newMovieData, isLoading } = useMovies();
  console.log(newMovieData, "data");
  const imgSrc = "https://www.themoviedb.org/t/p/w188_and_h282_bestv2/";

  return (
    <>
      <Box mt="2rem">
        <Text color={"white"} fontSize="1.5rem" fontWeight={"bold"} mb="1rem">
          In Theaters
        </Text>
        <Grid
          templateColumns="repeat(4, 1fr)"
          rowGap={"5rem"}
          columnGap={"1.5rem"}
        >
          {isLoading ? (
            <Spinner />
          ) : (
            newMovieData?.results?.map((movie) => {
              return (
                <GridItem key={movie?.id} w="100%" h="100%">
                  <MovieItem
                    title={movie?.title}
                    releaseDate={movie?.release_date}
                    img={`${imgSrc}${movie?.poster_path}`}
                  />
                </GridItem>
              );
            })
          )}
        </Grid>
      </Box>
    </>
  );
};

export default NowPlayingList;
