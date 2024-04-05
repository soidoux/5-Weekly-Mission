import React from "react";
import FacebookImg from "./ImgFolder/facebook.svg";
import TwitterImg from "./ImgFolder/twitter.svg";
import YoutubeImg from "./ImgFolder/youtube.svg";
import InstagramImg from "./ImgFolder/instagram.svg";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: #111322;
  color: #676767;
  margin-top: 60px;
  padding: 32px 104px 64px 104px;
`;

const FooterCenter = styled.div`
  display: flex;
  gap: 30px;
`;

const FooterImg = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;

  img {
    display: inline-block;
    vertical-align: top;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <p>©codeit - 2023</p>
      <FooterCenter>
        <p>Privacy Policy</p>
        <p>FAQ</p>
      </FooterCenter>
      <FooterImg>
        <img src={FacebookImg} alt="facebook-img" />
        <img src={TwitterImg} alt="twitter-img" />
        <img src={YoutubeImg} alt="youtube-img" />
        <img src={InstagramImg} alt="instagram-img" />
      </FooterImg>
    </FooterContainer>
  );
}

export default Footer;
