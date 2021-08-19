import styled from "styled-components/macro";
import SearchIcon from "@iconscout/react-unicons/icons/uil-search";
import PinIcon from "@iconscout/react-unicons/icons/uil-map-marker";
import { useState } from "react";

const cities = [
  "Helsinki, Findland",
  "Turku, Findland",
  "Oulu, Findland",
  "Vassa, Finland",
];

const categories = [
  { title: "Adults", description: "Ages 13 or above" },
  { title: "Children", description: "Ages 2 - 12" },
];

const SearchBarContainer = styled.div`
  border-radius: 1rem;
  display: flex;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  flex: 1;
`;

const SearchFormElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 1;
  ${(props) =>
    props.isSearchBarOpened &&
    `
    flex: 0;
`}
`;

const SearchBarSubcontainer = styled.div`
  padding: 1rem;
  border-left: 1px solid #f2f2f2;
  border-right: 1px solid #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;

  &.input-subcontainer {
    flex: 1;
    justify-content: flex-start;
  }

  ${(props) =>
    props.isSearchBarOpened &&
    `
    width: 100%;
    flex: 1;
    &.input-subcontainer {
      align-items: flex-start;
      flex-direction: column;
      ${
        props.active &&
        `
        border: 1px solid var(--gray1);
        border-radius: 1rem;
        border-left: 1px solid var(--gray1);
        border-right: 1px solid var(--gray1);
      `
      }
    }
    &.input-subcontainer::before {
      content: "${props.containerTitle}";
      font-size: 80%;
      font-weight: 600;
    }
`}

  & > input {
    width: 100%;
    border: none;
    outline: none;
  }

  & > p {
    color: var(--gray3);
    font-size: 90%;
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
  ${(props) =>
    !props.active &&
    `
  &:first-child,
  &:last-child {
    border-left: none;
    border-right: none;
  }
  `}
`;

const SearchBarDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  & > div {
    flex: 1;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  & > div p {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

const GlobalContainer = styled.div`
  display: flex;
  max-width: 35%;
  ${(props) =>
    props.isSearchBarOpened &&
    `
  flex-direction: column;
  gap: 2rem;
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;`}
`;

const GuestCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const GuestControllerButton = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  text-align: center;
  background-color: transparent;
  border-radius: 0.2rem;
  outline: none;
  border: 1px solid var(--gray3);
  color: var(--gray3);
  cursor: pointer;
`;

const GuestCategory = ({ title, description, totalGuests, setTotalGuests }) => {
  const [guestCount, setGuestCount] = useState(0);
  const countGuests = (value) => {
    let newValue = guestCount + value;
    if (newValue >= 0) {
      setGuestCount(newValue);
      setTotalGuests(totalGuests+value);
    }
  };
  return (
    <GuestCategoryContainer>
      <div className="category-title-container">
        <h3>{title}</h3>
        <p style={{ color: "var(--gray3)" }}>{description}</p>
      </div>
      <div
        style={{ display: "flex", gap: "1rem" }}
        className="category-controller-container"
      >
        <GuestControllerButton onClick={() => countGuests(-1)}>
          -
        </GuestControllerButton>
        <p>{guestCount}</p>
        <GuestControllerButton onClick={() => countGuests(1)}>
          +
        </GuestControllerButton>
      </div>
    </GuestCategoryContainer>
  );
};

const SearchBar = (props) => {
  return (
    <GlobalContainer {...props}>
      <SearchBarContainer {...props}>
        <SearchBarSubcontainer
          {...props}
          active={props.selectedSubcontainer === "location"}
          containerTitle="LOCATION"
          className="input-subcontainer"
        >
          <input
            onFocus={() => {
              props.openSearchBar();
              props.setSelectedSubcontainer("location");
            }}
            type="text"
            placeholder="Search a city"
          />
        </SearchBarSubcontainer>
        <SearchBarSubcontainer
          {...props}
          active={props.selectedSubcontainer === "guests"}
          containerTitle="GUESTS"
          className="input-subcontainer"
          onClick={() => {
            props.openSearchBar();
            props.setSelectedSubcontainer("guests");
          }}
        >
          <p
          >
            {props.totalGuests>0 ? `${props.totalGuests} guest${props.totalGuests>1?"s":""}` : "Add guests"}
          </p>
        </SearchBarSubcontainer>
        <SearchBarSubcontainer {...props}>
          <button>
            <SearchIcon
              color={props.isSearchBarOpened ? "#FFF" : "#EB5757"}
            ></SearchIcon>
          </button>
        </SearchBarSubcontainer>
      </SearchBarContainer>
      {props.isSearchBarOpened && (
        <SearchBarDetailsContainer>
          <div>
            {props.selectedSubcontainer==="location" && cities.map((city) => (
              <p
                key={city}
                style={{ cursor: "pointer" }}
                onClick={() => console.log(city)}
              >
                <PinIcon></PinIcon> {city}
              </p>
            ))}
          </div>
          <div>
            {props.selectedSubcontainer==="guests" && categories.map((category) => (
              <GuestCategory
                key={category.title}
                title={category.title}
                description={category.description}
                totalGuests={props.totalGuests}
                setTotalGuests={props.setTotalGuests}
              ></GuestCategory>
            ))}
          </div>
          <div></div>
        </SearchBarDetailsContainer>
      )}
    </GlobalContainer>
  );
};

export default SearchBar;
