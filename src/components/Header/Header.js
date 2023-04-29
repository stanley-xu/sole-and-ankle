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
      <MainHeader>
        <Logo />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <HeaderSpacer />
      </MainHeader>
    </header>
  );
};

const HeaderSpacer = () => <div />

const MainHeader = styled.div`
  padding: 21px 32px 23px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  display: flex;
  align-items: baseline;

  /* Create N-column layout */
  & > * {
    flex: 1;
  }
`;

const Nav = styled.nav``;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:not(:last-of-type) {
    margin-right: 3rem;
  }

  &:first-of-type {
    margin-left: 1rem;
    color: ${COLORS.secondary};
  }
`;

export default Header;
