import Search from "../../icons/Search";
import {
  Input,
  InputLeftElement,
  InputGroup,
  InputRightElement,
  Spinner,
  useOutsideClick,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { useRef, useState } from "react";

export default function SearchInput({
  loading,
  searchHandler,
  closeAndClearResults,
}) {
  const [isClicked, setIsClicked] = useState(false);
  const ref = useRef();
  useOutsideClick({
    ref: ref,
    handler: () => setIsClicked(false),
  });

  return (
    <InputGroup maxW={"200px"} ref={ref}>
      <InputLeftElement alignItems={"flex-start"} pointerEvents="none">
        {loading ? (
          <Spinner color={isClicked ? "#323232" : "white"} size="md" />
        ) : (
          <Search
            color={isClicked ? "#323232" : "white"}
            mt={"5px"}
            boxSize={"24px "}
          />
        )}
      </InputLeftElement>
      <Input
        placeholder={"search"}
        size="sm"
        _placeholder={{ color: "#323232" }}
        bg={isClicked ? "white" : "#323232"}
        variant="ghost"
        // focusBorderColor="pink.400"
        onClick={() => setIsClicked(true)}
        onChange={() => searchHandler()}
      />
      <InputRightElement
        pointerEvents="cursor"
        alignItems={"flex-start"}
        onClick={() => closeAndClearResults()}
        on
      >
        <CloseIcon color={"#323232"} mt={"10px"} />
      </InputRightElement>
    </InputGroup>
  );
}
