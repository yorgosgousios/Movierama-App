import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import useMovies from "./hooks/useMovies";

function App() {
  const { newMovieData, isLoading } = useMovies();
  console.log(newMovieData, "data");
  return (
    <>
      <div>elare file</div>
    </>
  );
}

export default App;
