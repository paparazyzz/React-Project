import React from "react";
import styled from "styled-components";

const SectionWrapper = styled.section`
  min-height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  background-image: url("/img.jpg");
  background-size: cover; /* Optional: adjusts the background image size */
  background-position: center; /* Optional: centers the background image */
`;

const ProfileDesc = styled.div`
  text-align:center;
  justify-content:center;
  align-items:center;
`;

const Title = styled.h2`
  color: #fff;
  font-wight: bold;
`;

const Img = styled.img`
  border-radius: 100%;
  width: 150px;
  height: 150px;
`;

const Div = styled.a`
  color: #666;
  font-size: 18px;
`;

const MainSection = () => {
  return (
    <SectionWrapper>
      <Img src="/img.jpg" />
      <ProfileDesc>
        <Title>Willy Prasetyo Aji</Title>
        <a>I'am a Junior Front End Developper</a>
      </ProfileDesc>
      <div class="sosmed"></div>
    </SectionWrapper>
  );
};

export default MainSection;
