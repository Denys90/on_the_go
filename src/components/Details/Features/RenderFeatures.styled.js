import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const Main = styled.div`
  display: flex;
`;
export const ContainerLeft = styled.div``;
export const ContainerRight = styled.div`
  width: 448px;

  border: 2px solid ${theme.colors.lightGray};
  margin-left: 24px;
  margin-top: 44px;
  border-radius: 10px;
  padding: 24px;
`;
export const ContainerIcon = styled.div`
  width: 430px;
  margin-top: 24px;
  padding: 20px;
  border-bottom: 2px solid ${theme.colors.grayScroll};
`;
export const VehicleDetailsContainer = styled.div`
  width: 430px;
  height: 200px;
  margin-top: 44px;
`;
export const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
  &:nth-last-of-type(1) {
    margin-bottom: 0;
  }
`;
export const StyleDetailsFeatures = styled.div`
  width: auto;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: center;
  margin-right: 8px;
  margin-bottom: 8px;

  padding: 10px 15px;
  background-color: ${theme.colors.paleGray};

  border: none;
  border-radius: 100px;

  text-decoration: none;
  display: inline-flex;
  align-items: center;

  &:nth-last-of-type(-n + 2) {
    margin-top: 0px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 48px;
`;
export const TitleSecond = styled.h2`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
  margin-bottom: 8px;
`;
export const TitleThird = styled.h3`
  padding: 0px;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;

  color: #475467;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
  margin-bottom: 24px;
`;
