import { useState } from "react";
import "./App.css";
import NowPlayingList from "./components/NowPlayingList/index.js";
import PopularSeries from "./components/PopularSeries";
import MainLayout from "./components/layouts/MainLayout";
import Pagination from "./components/Pagination";
import SearchResults from "./components/SearchResults";

function App() {
  const [isSeries, setIsSeries] = useState(false);
  const [isMovie, setIsMovie] = useState(true);
  const [isSearch, setIsSearch] = useState(false);
  return (
    <>
      <MainLayout
        isSeries={isSeries}
        setIsSeries={setIsSeries}
        isMovie={isMovie}
        setIsMovie={setIsMovie}
        isSearch={isSearch}
        setIsSearch={setIsSearch}
      >
        {isMovie && <NowPlayingList />}
        {isSeries && <PopularSeries />}
        {isSearch && <SearchResults />}
      </MainLayout>
    </>
  );
}

export default App;
