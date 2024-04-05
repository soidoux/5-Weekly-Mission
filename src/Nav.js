import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchUserData } from "./Api.js";
import LogoImg from "./ImgFolder/logo.svg";
import ProfileImg from "./ImgFolder/profileImg.js";

const GrobalNav = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #edf7ff;
  z-index: 1;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
`;

const NavComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 200px;
`;

function Nav() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchUserData()
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  return (
    <GrobalNav>
      <NavComponent>
        <Link to="/">
          <img src={LogoImg} alt="logo-img" />
        </Link>
        <Profile>
          <ProfileImg />
          <p>{userData?.email}</p>
        </Profile>
      </NavComponent>
    </GrobalNav>
  );
}

export default Nav;
