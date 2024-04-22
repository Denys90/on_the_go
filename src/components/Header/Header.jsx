import { HeaderWrapper, Logo, LogoImg, NavLinks } from './Header.styled';

import Camper from 'assets/favicon.png';

export const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <Logo to="/">
          <LogoImg src={Camper} alt="logo" />
        </Logo>
        <div>
          {' '}
          <NavLinks to="/">Home</NavLinks>
          <NavLinks to="/catalog">Catalog</NavLinks>
          <NavLinks to="/favorites">Favorite</NavLinks>
        </div>
      </HeaderWrapper>
    </>
  );
};
