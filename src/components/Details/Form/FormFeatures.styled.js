import styled from '@emotion/styled';
import { CommonButton } from 'components/Catalog/Catalog.styled';
import { ErrorMessage, Field } from 'formik';
import { theme } from 'styles/theme';
// Common
export const CommonInput = `
  width: 400px;
  height: 56px;
  border: none;
  color: ${theme.colors.gray};
  border-radius: 10px;
  background: rgb(247, 247, 247);
  margin-bottom: 14px;
  text-indent: 18px;
  &:focus {
    outline: none;
  }
`;
// ====================================
export const Input = styled(Field)`
  ${CommonInput}
`;
export const InputComment = styled(Field)`
  width: 400px;
  height: 114px;
  border: none;
  border-radius: 10px;
  background: rgb(247, 247, 247);
  resize: none;
  text-indent: 18px;
  padding-top: 18px;
  color: ${theme.colors.gray};

  &:focus {
    outline: none;
  }
`;

export const ButtonSubmit = styled.button`
  ${CommonButton}

  background: ${theme.colors.red};
  cursor: pointer;

  &:hover {
    box-shadow: ${theme.colors.btnShadow};
  }
  margin-bottom: 10px;
`;

export const Error = styled(ErrorMessage)`
  color: ${theme.colors.red};
`;

export const ContainerCalendar = styled.div`
  position: relative;
`;

export const Svg = styled.svg`
  pointer-events: none;
  position: absolute;
  top: 27px;
  left: 370px;
  transform: translate(-50%, -50%);
  color: rebeccapurple;
  width: 20px;
  height: 20px;
  z-index: 999;
`;
