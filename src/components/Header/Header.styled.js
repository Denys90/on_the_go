import styled from '@emotion/styled';
import { theme } from 'styles/theme';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 50px;
  height: 60px;
  width: 1440px;
  border-top: none;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  background-color: ${theme.colors.white};
`;

export const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-right: 990px;
  p {
    margin-left: 10px;
    font-size: 24px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0%;
    text-align: left;

    background-image: linear-gradient(
      122deg,
      rgba(238, 255, 118, 1) 3%,
      rgba(223, 46, 23, 1) 59%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
  }
`;

export const NavLinks = styled(NavLink)`
  color: ${theme.colors.black};
  font-size: 16px;
  padding: 10px 0;
  position: relative;
  padding-right: 20px;
  &:nth-last-of-type(1) {
    padding-right: 0;
  }
  transition:
    color 0.3s,
    transform 0.3s,
    text-decoration 0.3s;

  &:hover {
    color: ${theme.colors.red};
  }

  &.active {
    color: ${theme.colors.red};
    text-decoration: underline;
  }
`;

export const LogoImg = styled.img`
  width: 36px;
  height: 36px;
`;
export const NavContainer = styled.div`
  margin-right: 50px;
`;
