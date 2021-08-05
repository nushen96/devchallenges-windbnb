import styled from "styled-components";
import headerLogo from "../resources/images/logo.png";
import SearchBar from "./SearchBar";

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <header className="row">
      <NavBar>
        <img src={headerLogo} alt="Logo"></img>
        <SearchBar></SearchBar>
      </NavBar>
    </header>
  );
};

export default Header;
