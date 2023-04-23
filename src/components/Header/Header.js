import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';

const Header = () => {
  // Our site features two visual headers, but they should be
  // grouped semantically as a single header.
  return (
    <header>
      <SuperHeader />
      <MainWrapper>
        <MainHeader>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <Nav>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </Nav>
        </MainHeader>

      </MainWrapper>
    </header>
  );
};

const MainWrapper = styled.header`
  position: relative;
`

const LogoWrapper = styled.span`
  position: absolute;
  left: 2rem;
  top: 21px;
`

const MainHeader = styled.div`
  padding: 1.625rem 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  display: flex;
  justify-content: center;
`;

const Nav = styled.nav``;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
  
  &:first-of-type {
    color: ${COLORS.secondary};
  }
  
  &:not(:last-of-type) {
    margin-right: 3rem;
  }
  

`;

export default Header;
