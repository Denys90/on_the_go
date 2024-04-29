import styled from '@emotion/styled';
import { theme } from 'styles/theme';
const CheckBoxCommon = `
  display: inline-block;
  cursor: pointer;

`;

// ==========================================
export const ContainerForEquipment = styled.div`
  width: 360px;
  display: inline-flex;
  border-top: 2px solid ${theme.colors.grayScroll};
  padding-top: 24px;
  margin-right: 64px;
`;
export const EquipmentBox = styled.div`
  margin-bottom: 32px;
`;
export const VehicleBox = styled.div`
  border-top: 2px solid ${theme.colors.grayScroll};
  padding-top: 24px;
`;

export const FirstTitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
  margin-bottom: 14px;
`;
export const SecondTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
  margin-bottom: 24px;
`;

export const CheckBoxButton = styled.label`
  ${CheckBoxCommon}
  margin-right: 10px;
  margin-bottom: 10px;
  &:nth-of-type(3n) {
    margin-right: 0;
  }
  &:last-of-type,
  &:nth-last-of-type(2) {
    margin-bottom: 0;
  }
`;
export const CheckBoxButtonVan = styled.label`
  ${CheckBoxCommon}
  margin-right: 10px;
  &:nth-last-of-type(1) {
    margin-right: 0;
  }
`;

export const CheckBoxInput = styled.input`
  position: absolute !important;
  opacity: 0;
  pointer-events: none;
  width: 0;
  height: 0;
`;

export const CheckBoxLabel = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 110px;
  height: 95px;
  border-radius: 10px;
  border: 2px solid ${theme.colors.black};
  border-color: ${(props) =>
    props.option ? `${theme.colors.red}` : `${theme.colors.grayScroll}`};
`;

export const SvgStyles = styled.svg`
  display: block;
  width: 28px;
  height: 24px;
  stroke: #111;
  margin-bottom: 10px;
`;
export const SvgStylesVan = styled.svg`
  display: block;
  width: 40px;
  height: 28px;
  margin-bottom: 9px;
  stroke: #111;
`;
export const Equipment = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: center;
`;
