import { Box, useBreakpointValue } from "@chakra-ui/react";
import Header from "../Header";
import Container from "../Container";
import HeaderMobile from "../HeaderMobile";

const MainLayout = ({
  children,
  isSeries,
  isMovie,
  setIsMovie,
  setIsSeries,
}) => {
  const header = useBreakpointValue({
    base: (
      <HeaderMobile
        isSeries={isSeries}
        setIsSeries={setIsSeries}
        isMovie={isMovie}
        setIsMovie={setIsMovie}
      />
    ),
    lg: (
      <Header
        isSeries={isSeries}
        setIsSeries={setIsSeries}
        isMovie={isMovie}
        setIsMovie={setIsMovie}
      />
    ),
  });
  return (
    <>
      <Container>
        {header}
        <Box>{children}</Box>
      </Container>
    </>
  );
};

export default MainLayout;
