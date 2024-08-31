import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 7%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
`;

const Title = styled.a`
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 10px;
  color: #e03400;
  text-align: center;
`;

const Nav = styled.nav`
  margin: 10px 0;
`;

const NavLink = styled.a`
  color: #ffff;
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 500;
  margin: 0 1rem;
  text-decoration: none;

  &:hover {
    color: #e03400;
  }
  &:after {
    content: "";
    display: block;
    padding-bottom: 0.3rem;
    border-bottom: 0.1rem solid #ff5b22;
    transform: scaleX(0);
    transition: 0.3s linear;
  }
  &:hover:after {
    transform: scaleX(0.5);
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Title>Tester</Title>
      <Nav>
        <NavLink href="#home">Welcome</NavLink>
        <NavLink href="#about">About Us</NavLink>
        <NavLink href="#about">Experience</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
