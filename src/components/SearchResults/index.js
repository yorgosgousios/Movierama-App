import { Box, Spinner, Text } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import MovieItem from "../MovieItem";
import useSeries from "../../hooks/useSeries";
import useSearch from "../../hooks/useSearch";
import { getSearchResults } from "../../services/search";

const SearchResults = () => {
  const { searchData, isLoading, setText } = useSearch();
  //   setText("matilda");

  const imgSrc = "https://www.themoviedb.org/t/p/w188_and_h282_bestv2/";

  return (
    <>
      <Box mt="100px">
        <Text color={"white"} fontSize="1.5rem" fontWeight={"bold"} mb="1rem">
          Search Results
        </Text>
        <Grid
          templateColumns="repeat(4, 1fr)"
          rowGap={"5rem"}
          columnGap={"1.5rem"}
        >
          {isLoading ? (
            <Spinner color="white" />
          ) : (
            searchData?.results?.map((result) => {
              return (
                <GridItem key={result?.id} w="100%" h="100%">
                  <MovieItem
                    title={result?.name}
                    releaseDate={result?.first_air_date}
                    img={`${imgSrc}${result?.poster_path}`}
                    isLoading={isLoading}
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

export default SearchResults;
