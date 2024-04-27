import styled from '@emotion/styled';

export const MainContauner = styled.div`
  display: block;
  border: 2px solid black;

  margin-right: 64px;

  border-radius: 10px;
`;

export const TitleFilter = styled.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
`;

export const TitleHeader = styled.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
`;

export const CheckboxList = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  display: inline-block;

  &:nth-of-type(3) {
    margin-right: 0;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

export const CheckboxWrapper = styled.div`
  display: inline-block;
  width: 115px;
  height: 95px;
  border: 2px solid red;
  border-radius: 10px;
  margin-right: 10px;
  &:active {
    border-color: blue;
  }
`;

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  display: none;
`;

export const CheckboxCustom = styled.div``;
