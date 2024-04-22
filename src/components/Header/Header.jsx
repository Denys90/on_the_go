import {
  HeaderWrapper,
  Logo,
  LogoImg,
  NavContainer,
  NavLinks,
} from './Header.styled';

import Camper from 'assets/favicon.png';

export const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <Logo to="/">
          <LogoImg src={Camper} alt="logo" />
        </Logo>
        <NavContainer>
          <NavLinks to="/">Home</NavLinks>
          <NavLinks to="/catalog">Catalog</NavLinks>
          <NavLinks to="/favorites">Favorite</NavLinks>
        </NavContainer>
      </HeaderWrapper>
    </>
  );
};
