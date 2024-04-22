// `;
import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const Container = styled.div`
  width: 902px;
  height: auto;
`;

export const ContainerImg = styled.ul`
  display: flex;
  gap: 16px;
`;

export const Images = styled.img`
  width: 290px;
  height: 310px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
`;
export const TitleSecond = styled.h2`
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0%;
  text-align: left;
`;

export const Description = styled.p`
  color: ${theme.colors.gray};
  width: 902px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 44px 0px;
`;

export const BtnContainer = styled.div`
  display: flex;
`;

export const BtnFeatures = styled.button`
  border: none;
  background: none;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
  font-weight: bold;

  position: relative;
  width: 85px;
  height: 24px;
  margin-bottom: 24px;
  display: block;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin-right: 40px;
  &:nth-last-of-type(1) {
    margin-right: 0px;
  }
  ::before {
    content: '';
    position: absolute;
    top: 198%;
    left: 50%;
    transform: translateX(-50%);
    width: 85px;
    height: 4px;
    background-color: ${({ active }) =>
      active ? ` ${theme.colors.red}` : 'transparent'};
  }
`;

export const Wrapper = styled.div`
  border-bottom: 2px solid ${theme.colors.lightGray};
`;
export const Underline = styled.div`
  border-bottom: 1px solid ${theme.colors.black};
`;
