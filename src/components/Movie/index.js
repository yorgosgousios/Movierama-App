import { Text, Box, Image } from "@chakra-ui/react";

const Movie = ({ title, img, releaseDate }) => {
  return (
    <>
      <Box>
        <Text color={"white"}>{title}</Text>
        <Text color={"white"}>{releaseDate}</Text>
        <Image width={"100%"} src={img} alt="alt-image" />
      </Box>
    </>
  );
};

export default Movie;
