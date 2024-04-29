import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const ContainerForEquipment = styled.div`
  width: 360px;
  display: inline-flex;
`;

export const FirstTitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
`;
export const SecondTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
`;

export const CheckBoxButton = styled.label`
  display: inline-block;
  /* margin-right: 10px; */

  cursor: pointer;
`;

export const CheckBoxLabel = styled.span`
  display: inline-block;
  margin-right: 10px;
  width: 110px;
  height: 95px;
  border: 2px solid ${theme.colors.lightGray};
  border-radius: 10px;
  border-color: ${(props) =>
    props.option ? `${theme.colors.red}` : `${theme.colors.grayScroll}`};
`;
export const CheckBoxInput = styled.input`
  position: absolute !important;
  opacity: 0;
  pointer-events: none;
  width: 0;
  height: 0;
`;
