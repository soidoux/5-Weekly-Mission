import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchUserData, fetchUserFolder } from "./Api.js";
import styled from "styled-components";
import SearchBar from "./SearchBar.js";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #edf7ff;
  margin-top: 84.5px;
`;

const ProfileImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 100%;
`;

const FolderName = styled.p`
  font-size: 40px;
`;

const LinkContainer = styled.div`
  display: grid;
  grid-template: auto / 1fr 1fr 1fr;
  max-width: 1060px;
  width: 100%;
  justify-content: center;
  gap: 25px 20px;
  margin: 40px auto;
`;

const LinkItem = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  width: 340px;
`;

const LinkTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 15px 20px;
  margin: 0;
`;

const LinkImage = styled.img`
  border-radius: 8px 8px 0 0;
  width: 100%;
  height: 253.746px;
  object-fit: cover;
`;

const LinkTime = styled.p`
  color: #666;
  font-size: 13px;
  margin: 0 0 10px;
`;

const LinkName = styled.p`
  overflow: hidden;
  height: 49px;
  align-self: stretch;
  margin: 0 0 10px;
  font-size: 16px;
  line-height: 24px;
`;

const LinkCreated = styled.p`
  font-size: 14px;
  color: #333;
  margin: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

function Header() {
  const [userData, setUserData] = useState(null);
  const [userFolder, setUserFolder] = useState(null);
  const [userLink, setUserLink] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await fetchUserData();
        setUserData(userData);

        if (userData) {
          const userFolderData = await fetchUserFolder();
          setUserFolder(userFolderData);
          setUserLink(userFolderData.folder.links);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  function getTimeDifferenceString(createdAt) {
    const createdDate = new Date(createdAt);
    const currentDate = new Date();
    const timeDifferenceInMinutes = Math.floor(
      (currentDate - createdDate) / (1000 * 60)
    );
    const timeDifferenceInHours = Math.floor(timeDifferenceInMinutes / 60);
    const timeDifferenceInDays = Math.floor(timeDifferenceInHours / 24);
    const timeDifferenceInMonths = Math.floor(timeDifferenceInDays / 30);
    const timeDifferenceInYears = Math.floor(timeDifferenceInMonths / 12);

    if (timeDifferenceInMinutes < 2) {
      return "1 minute ago";
    } else if (timeDifferenceInMinutes <= 59) {
      return `${timeDifferenceInMinutes} minutes ago`;
    } else if (timeDifferenceInHours < 1) {
      return "1 hour ago";
    } else if (timeDifferenceInHours <= 23) {
      return `${timeDifferenceInHours} hours ago`;
    } else if (timeDifferenceInDays < 1) {
      return "1 day ago";
    } else if (timeDifferenceInDays <= 30) {
      return `${timeDifferenceInDays} days ago`;
    } else if (timeDifferenceInMonths < 1) {
      return "1 month ago";
    } else if (timeDifferenceInMonths <= 11) {
      return `${timeDifferenceInMonths} months ago`;
    } else if (timeDifferenceInYears < 1) {
      return "1 year ago";
    } else {
      return `${timeDifferenceInYears} years ago`;
    }
  }

  return (
    <>
      <HeaderContainer>
        {userData && (
          <>
            <ProfileImg src={userData.profileImageSource} alt="profileImage" />
            <p>@{userData.name}</p>
            {userFolder && <FolderName>{userFolder.folder.name}</FolderName>}
          </>
        )}
      </HeaderContainer>
      <SearchBar />
      <LinkContainer>
        {userLink &&
          userLink.map((link) => (
            <StyledLink to={link.url}>
              <LinkItem key={link.id}>
                <LinkImage src={link.imageSource} alt={link.title} />
                <LinkTitle>
                  <LinkTime>{getTimeDifferenceString(link.createdAt)}</LinkTime>
                  <LinkName>{link.title}</LinkName>
                  <LinkCreated>{link.createdAt.substring(0, 10)}</LinkCreated>
                </LinkTitle>
              </LinkItem>
            </StyledLink>
          ))}
      </LinkContainer>
    </>
  );
}

export default Header;
