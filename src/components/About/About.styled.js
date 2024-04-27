import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const AboutContainer = styled.div`
  padding-top: 100px;
`;
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin-top: 40px;
  margin-bottom: 40px;
`;
export const Kard = styled.div`
  display: block;
  width: 250px;
  border-radius: 10px;
  padding: 15px;
  box-shadow: ${theme.colors.boxShadow};
`;
export const Title = styled.h2`
  font-size: 21px;
  margin-bottom: 10px;
  color: ${theme.colors.black};
`;

export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
  color: ${theme.colors.gray};
`;
