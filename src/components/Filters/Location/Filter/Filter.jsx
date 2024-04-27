import {
  CheckboxCustom,
  CheckboxList,
  CheckboxWrapper,
  Input,
  MainContauner,
  TitleFilter,
  TitleHeader,
} from './Filter.styled';

export const Filter = () => {
  return (
    <MainContauner>
      <TitleFilter>Filter</TitleFilter>
      <TitleHeader>Vehicle equipment</TitleHeader>
      <CheckboxList>
        <CheckboxWrapper>
          <Input type="checkbox" />
          <CheckboxCustom />
        </CheckboxWrapper>

        <CheckboxWrapper>
          <Input type="checkbox" />
          <CheckboxCustom />
        </CheckboxWrapper>

        <CheckboxWrapper>
          <Input type="checkbox" />
          <CheckboxCustom />
        </CheckboxWrapper>

        <CheckboxWrapper>
          <Input type="checkbox" />
          <CheckboxCustom />
        </CheckboxWrapper>

        <CheckboxWrapper>
          <Input type="checkbox" />
          <CheckboxCustom />
        </CheckboxWrapper>
      </CheckboxList>
    </MainContauner>
  );
};
