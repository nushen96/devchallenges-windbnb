import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Overlay from "./components/Overlay";
import Stays from "./components/Stays";
import { useState } from "react";
import {stays} from './utils/stays'

function App() {
  const [isSearchBarOpened, setIsSearchBarOpened] = useState(false);
  const [selectedSubcontainer, setSelectedSubcontainer] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [guests, setGuests] = useState({ adults: 0, children: 0 });

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
      ></Header>
      <Stays staysTitle={`Stays in ${selectedLocation || "Finland"}`} stays={stays}></Stays>
    </>
  );
}

export default App;
