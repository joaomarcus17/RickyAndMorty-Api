import React from "react";
import styled from "styled-components";
import logoImage from "../Assets/images/Rick_And_Morty_(6).png";

const NavbarContainer = styled.nav`
  color: #000;
  padding: 10px;
  text-align: center;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const LogoImage = styled.img`
  width: 350px;
  height: 150px;
`;

const Brand = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 20px;
  text-transform: uppercase;
`;

const Navbar = ({ brand }) => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <LogoImage src={logoImage} alt="Logo" />
      </LogoContainer>
      <div>
        <Brand href="/">{brand}</Brand>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
