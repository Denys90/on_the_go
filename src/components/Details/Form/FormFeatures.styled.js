import styled from '@emotion/styled';
import { ErrorMessage, Field } from 'formik';
import { theme } from 'styles/theme';

export const Input = styled(Field)`
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
  border: none;
  color: white;
  width: 160px;
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 60px 16px 60px;
  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 24px 0px;
  border-radius: 200px;
  background: rgb(228, 72, 72);
  margin-bottom: 10px;
`;

export const Error = styled(ErrorMessage)`
  color: ${theme.colors.red};
`;

export const ContainerCalendar = styled.div`
  position: relative;
`;

export const Svg = styled.svg`
  position: absolute;
  top: 27px;
  left: 370px;
  transform: translate(-50%, -50%);
  color: rebeccapurple;
  width: 20px;
  height: 20px;
  z-index: 999;
`;
