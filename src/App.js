import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Overlay from "./components/Overlay";
import { useState } from "react";

function App() {
  const [isSearchBarOpened, setIsSearchBarOpened] = useState(false);
  const [selectedSubcontainer, setSelectedSubcontainer] = useState("");

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
      ></Header>
    </>
  );
}

export default App;
