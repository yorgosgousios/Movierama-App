import { useState } from "react";
import "./App.css";
import NowPlayingList from "./components/NowPlayingList/index.js";
import PopularSeries from "./components/PopularSeries";
import MainLayout from "./components/layouts/MainLayout";

function App() {
  const [isSeries, setIsSeries] = useState(false);
  const [isMovie, setIsMovie] = useState(true);
  return (
    <>
      <MainLayout
        isSeries={isSeries}
        setIsSeries={setIsSeries}
        isMovie={isMovie}
        setIsMovie={setIsMovie}
      >
        {isMovie && <NowPlayingList />}
        {isSeries && <PopularSeries />}
      </MainLayout>
    </>
  );
}

export default App;
