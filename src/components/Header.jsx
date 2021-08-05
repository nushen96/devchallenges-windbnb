import styled from "styled-components";
import headerLogo from "../resources/images/logo.png";
import SearchBar from "./SearchBar";

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${(props) =>
    props.isSearchBarOpened &&
    `
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: fit-content;
    background-color: #fff;
    min-height: 40vh;
    align-items: flex-start;
    padding: 2rem 5% 1rem;
  `}
`;

const Header = (props) => {
  return (
    <header className="row">
      <NavBar {...props}>
        {!props.isSearchBarOpened && <img src={headerLogo} alt="Logo"></img>}
        <SearchBar {...props}></SearchBar>
      </NavBar>
    </header>
  );
};

export default Header;
