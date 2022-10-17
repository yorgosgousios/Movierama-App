import {
  Box,
  Modal,
  Text,
  ModalContent,
  useDisclosure,
  ModalOverlay,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import Search from "../../icons/Search";
import { CloseIcon } from "@chakra-ui/icons";
import { getSearchResults } from "../../services/search";
import SearchInput from "./SearchInput";
import useSearch from "../../hooks/useSearch";

let TIMER = null;

export default function SearchField({ setIsMovie, setIsSeries, setIsSearch }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [term, setTerm] = useState("");
  const [results, setResults] = useState();
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  // const { setText } = useSearch();

  const searchHandler = () => {
    // setText(text);
    setIsSearch(true);
    setIsMovie(false);
    setIsSeries(false);
  };

  return (
    <>
      {/* <Box
        cursor={"pointer"}
        onClick={onOpen}
        minW={"200px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent="center"
      >
        <Search color={"white"} boxSize={"1rem"} />
        <Text textStyle={"sm"} color={"white"} ml={"12px"} d={"block"}>
          Search
        </Text>
      </Box> */}
      <SearchInput />
    </>
  );
}
