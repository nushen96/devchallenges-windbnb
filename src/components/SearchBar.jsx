import styled from "styled-components";
import UilReact from "@iconscout/react-unicons/icons/uil-search";

const SearchBarContainer = styled.div`
  border-radius: 1rem;
  display: flex;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  max-width: 35%;
`;

const SearchBarSubcontainer = styled.div`
  padding: 1rem;
  border-left: 1px solid #f2f2f2;
  border-right: 1px solid #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;

  & > input {
    width: 100%;
    border: none;
    outline: none;
  }

  & > button {
    cursor: pointer;
    border: none;
    background-color: transparent;
  }

  &:first-child,
  &:last-child {
    border-left: none;
    border-right: none;
  }
`;

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <SearchBarSubcontainer>
        <input type="text" placeholder="Search a city" />
      </SearchBarSubcontainer>
      <SearchBarSubcontainer>
        <input type="text" placeholder="Add guests" />
      </SearchBarSubcontainer>
      <SearchBarSubcontainer>
        <button>
          <UilReact color="#EB5757"></UilReact>
        </button>
      </SearchBarSubcontainer>
    </SearchBarContainer>
  );
};

export default SearchBar;
