import styled from "styled-components";
import Profile2 from "../ImgFolder/profile2.svg";
import Profile1 from "../ImgFolder/profile1.svg";

const ProfileContainer = styled.div`
  position: relative;
  width: 28px;
  height: 28px;
`;

const ProfileImg = styled.img`
  position: absolute;
  top: 8px;
  left: 9px;
  width: 10px;
  height: 10px;
`;

const ProfileBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${Profile1});
  background-size: cover;
`;

function ProfileComponent() {
  return (
    <ProfileContainer>
      <ProfileBackground />
      <ProfileImg src={Profile2} alt="profile2" />
    </ProfileContainer>
  );
}

export default ProfileComponent;
