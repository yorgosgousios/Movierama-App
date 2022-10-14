import { Box } from "@chakra-ui/react";
import Header from "../Header";
import Container from "../Container";

const MainLayout = ({
  children,
  isSeries,
  isMovie,
  setIsMovie,
  setIsSeries,
}) => {
  return (
    <>
      <Container>
        <Header
          isSeries={isSeries}
          setIsSeries={setIsSeries}
          isMovie={isMovie}
          setIsMovie={setIsMovie}
        />
        <Box>{children}</Box>
      </Container>
    </>
  );
};

export default MainLayout;
