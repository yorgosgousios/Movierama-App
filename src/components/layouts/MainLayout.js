import { Box } from "@chakra-ui/react";
import Header from "../Header";
import Container from "../Container";

const MainLayout = ({ children }) => {
  return (
    <>
      <Container>
        <Header />
        <Box>{children}</Box>
      </Container>
    </>
  );
};

export default MainLayout;
