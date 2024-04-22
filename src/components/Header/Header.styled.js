import styled from '@emotion/styled';
import { theme } from 'styles/theme';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: auto 0;
  border-top: none;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled(NavLink)`
  padding-left: 50px;
`;

export const NavLinks = styled(NavLink)`
  padding-right: 50px;
  color: ${theme.colors.black};
  font-size: 16px;
  text-decoration: none;
  margin: 0 15px;
  padding: 10px 0;
  position: relative;
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
