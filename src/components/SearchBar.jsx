import styled from "styled-components";
import UilReact from "@iconscout/react-unicons/icons/uil-search";

const SearchBarContainer = styled.div`
  border-radius: 1rem;
  display: flex;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  max-width: 35%;
  ${(props) =>
    props.isSearchBarOpened &&
    `
    max-width: 1280px;
    margin: 0 auto;
    width: 100%;
  `}
`;

const SearchBarSubcontainer = styled.div`
  padding: 1rem;
  border-left: 1px solid #f2f2f2;
  border-right: 1px solid #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.isSearchBarOpened &&
    `
    width: 100%;
    flex: 1;
`}

  & > input {
    width: 100%;
    border: none;
    outline: none;
  }

  & > button {
    cursor: pointer;
    border: none;
    background-color: transparent;
    ${(props) =>
      props.isSearchBarOpened &&
      `
      display: flex;
      align-items: center;
      padding: 0.5rem 1rem;
      background-color: #EB5757;
      color: #fff;
      border-radius: 1rem;
      gap: 0.5rem;
      &::after {
        content: "Search";
      }
    `}
  }

  &:first-child,
  &:last-child {
    border-left: none;
    border-right: none;
  }
`;

const SearchBar = (props) => {
  return (
    <SearchBarContainer {...props}>
      <SearchBarSubcontainer {...props}>
        <input
          onFocus={() => props.openSearchBar()}
          type="text"
          placeholder="Search a city"
        />
      </SearchBarSubcontainer>
      <SearchBarSubcontainer {...props}>
        <input
          onFocus={() => props.openSearchBar()}
          type="text"
          placeholder="Add guests"
        />
      </SearchBarSubcontainer>
      <SearchBarSubcontainer {...props}>
        <button>
          <UilReact
            color={props.isSearchBarOpened ? "#FFF" : "#EB5757"}
          ></UilReact>
        </button>
      </SearchBarSubcontainer>
    </SearchBarContainer>
  );
};

export default SearchBar;