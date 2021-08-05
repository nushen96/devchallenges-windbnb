import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Overlay from "./components/Overlay";
import { useState } from "react";

function App() {
  const [isSearchBarOpened, setIsSearchBarOpened] = useState(false);

  function openSearchBar() {
    setIsSearchBarOpened(true);
  }

  function closeSearchBar() {
    setIsSearchBarOpened(false);
  }
  return (
    <>
      {isSearchBarOpened && (
        <Overlay onClick={() => closeSearchBar()}></Overlay>
      )}
      <Header
        openSearchBar={openSearchBar}
        isSearchBarOpened={isSearchBarOpened}
      ></Header>
    </>
  );
}

export default App;
