import {
  Input,
  InputLeftElement,
  InputGroup,
  InputRightElement,
  Spinner,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { CloseIcon } from "@chakra-ui/icons";

const Search = () => {
  return (
    <>
      <InputGroup maxW={"200px"} height="100%">
        <InputLeftElement>
          <SearchIcon />
        </InputLeftElement>
        <Input
          background="grey !important"
          placeholder="Search"
          variant={"ghost"}
        />
        <InputRightElement>
          <CloseIcon />
        </InputRightElement>
      </InputGroup>
    </>
  );
};

export default Search;
