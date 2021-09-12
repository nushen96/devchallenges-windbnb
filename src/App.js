import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Overlay from "./components/Overlay";
import Stays from "./components/Stays";
import { useState } from "react";
import { stays } from "./utils/stays";

function App() {
  const [isSearchBarOpened, setIsSearchBarOpened] = useState(false);
  const [selectedSubcontainer, setSelectedSubcontainer] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [guests, setGuests] = useState({ adults: 0, children: 0 });
  const [filteredStays, setFilteredStays] = useState(stays);

  function openSearchBar() {
    setIsSearchBarOpened(true);
  }

  function closeSearchBar() {
    setIsSearchBarOpened(false);
  }
  return (
    <>
      {isSearchBarOpened && (
        <Overlay
          onClick={() => {
            closeSearchBar();
            setSelectedSubcontainer("");
          }}
        ></Overlay>
      )}
      <Header
        openSearchBar={openSearchBar}
        isSearchBarOpened={isSearchBarOpened}
        selectedSubcontainer={selectedSubcontainer}
        setSelectedSubcontainer={setSelectedSubcontainer}
        guests={guests}
        setGuests={setGuests}
        locationQuery={locationQuery}
        setLocationQuery={setLocationQuery}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        stays={stays}
        setFilteredStays={setFilteredStays}
      ></Header>
      <Stays
        staysTitle={`Stays in ${selectedLocation || "Finland"}`}
        stays={filteredStays}
      ></Stays>
      <footer
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "90%",
          margin: "1rem 0",
          color: "var(--gray3)"
        }}
      >
        <p>
          Made with fierce by <b>Papi Diagne</b> - devChallenges.io
        </p>
      </footer>
    </>
  );
}

export default App;
