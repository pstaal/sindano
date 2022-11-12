import React from 'react';
import styled from 'styled-components';
import headerLogo from '../src/images/header.svg';
import { Button, ButtonLabel } from './button.style.js';

import { LogoImage } from './logoImage.style.js';

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: auto;
  max-width: 1440px;
`;
export const StyledList = styled.ul`
  display: inline-block;
  text-decoration: none;
`;
export const StyledIcons = styled.li`
  text-decoration: none;
  list-style: none;
  display: inline-block;
  padding: 0 32px 0 0;
`;

export const StyledLinks = styled.a`
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
`;
export const StyledNav = styled.nav``;

function Header() {
  return (
    <HeaderStyle>
      <LogoImage src={headerLogo} alt="Sindano logo"></LogoImage>

      <StyledNav>
        <StyledList>
          <StyledIcons>
            <StyledLinks href="#">About</StyledLinks>
          </StyledIcons>
          <StyledIcons>
            <StyledLinks href="#">What we do</StyledLinks>
          </StyledIcons>
          <StyledIcons>
            <StyledLinks href="#">FAQ</StyledLinks>
          </StyledIcons>
        </StyledList>
      </StyledNav>

      <Button backgroundColor="#EC1E7B">
        <ButtonLabel>Request a call</ButtonLabel>
      </Button>
    </HeaderStyle>
  );
}
export default Header;
