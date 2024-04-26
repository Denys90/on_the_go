import {
  HeaderWrapper,
  Logo,
  LogoImg,
  NavContainer,
  NavLinks,
} from './Header.styled';

import Camper from 'assets/favicon/free-icon-camper-6734383.png';

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
