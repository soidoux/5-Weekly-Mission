import styled from "styled-components";
import SearchBarIconImg from "./ImgFolder/Search.svg";

const SearchBarContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  margin-top: 40px;
`;

const SearchBarInput = styled.input`
  padding: 15px 42px;
  border-radius: 10px;
  background: #f5f5f5;
  width: 1060px;
  border: none;
`;

const SearchBarIcon = styled.img`
  position: absolute;
  width: 16px;
  height: 16px;
  top: 15px;
  left: 196px;
`;

function SearchBar() {
  return (
    <SearchBarContainer>
      <SearchBarIcon src={SearchBarIconImg} alt="search-bar-icon" />
      <SearchBarInput placeholder="링크를 검색해 보세요." />
    </SearchBarContainer>
  );
}

export default SearchBar;
