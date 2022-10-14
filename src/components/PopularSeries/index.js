import { Box, Spinner, Text } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import MovieItem from "../MovieItem";
import useSeries from "../../hooks/useSeries";

const PopularSeries = () => {
  const { seriesData, isLoading } = useSeries();
  console.log(seriesData, "data");
  const imgSrc = "https://www.themoviedb.org/t/p/w188_and_h282_bestv2/";

  return (
    <>
      <Box mt="2rem">
        <Text color={"white"} fontSize="1.5rem" fontWeight={"bold"} mb="1rem">
          What to watch
        </Text>
        <Grid
          templateColumns="repeat(4, 1fr)"
          rowGap={"5rem"}
          columnGap={"1.5rem"}
        >
          {isLoading ? (
            <Spinner />
          ) : (
            seriesData?.results?.map((serie) => {
              return (
                <GridItem key={serie?.id} w="100%" h="100%">
                  <MovieItem
                    title={serie?.name}
                    releaseDate={serie?.first_air_date}
                    img={`${imgSrc}${serie?.poster_path}`}
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

export default PopularSeries;
