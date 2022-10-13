import { Box, Text } from "@chakra-ui/react";
import Search from "../Search";

const Header = () => {
  return (
    <Box
      display={"flex"}
      alignItems="center"
      justifyContent={"space-between"}
      background={"#323232"}
    >
      <Box w={"200px"} />
      <Text height={"100%"} color={"red"} fontSize="48px">
        MovieRama
      </Text>
      <Search />
    </Box>
  );
};

export default Header;
