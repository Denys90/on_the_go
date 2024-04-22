import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  margin-bottom: 15px;
  color: #ffffff;
  text-shadow:
    0 0 5px ${theme.colors.red},
    0 0 10px ${theme.colors.red},
    0 0 20px ${theme.colors.red},
    0 0 40px ${theme.colors.red},
    0 0 80px ${theme.colors.red};
`;
export const GoBack = styled(NavLink)`
  color: #ffffff;
  text-shadow:
    0 0 5px ${theme.colors.red},
    0 0 10px ${theme.colors.red},
    0 0 20px ${theme.colors.red},
    0 0 40px ${theme.colors.red},
    0 0 80px ${theme.colors.red};
`;
