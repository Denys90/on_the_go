import {
  ContainerIcon,
  ContainerLeft,
  ContainerRight,
  FormContainer,
  Main,
  Title,
  TitleSecond,
  TitleThird,
  VehicleDetailsContainer,
} from './RenderFeatures.styled';
import FormFeatures from '../Form/FormFeatures';
import AdvantagesList from 'components/AdvantagesList/AdvantagesList';

export const RenderFeatures = (advert) => {
  return (
    <Main>
      <ContainerLeft>
        <ContainerIcon>
          <AdvantagesList van={advert} />
        </ContainerIcon>
        <Title>Vehicle details</Title>
        <VehicleDetailsContainer>
          <FormContainer>
            <p>Form</p>
            <p>Panel truck</p>
          </FormContainer>
          <FormContainer>
            <p>Length</p>
            <p>{advert.length}</p>
          </FormContainer>
          <FormContainer>
            <p>Width</p>
            <p>{advert.width}</p>
          </FormContainer>
          <FormContainer>
            <p>Height</p>
            <p>{advert.height}</p>
          </FormContainer>
          <FormContainer>
            <p>Tank</p>
            <p>{advert.tank}</p>
          </FormContainer>
          <FormContainer>
            <p>Consumption</p>
            <p>{advert.consumption}</p>
          </FormContainer>
        </VehicleDetailsContainer>
      </ContainerLeft>
      <ContainerRight>
        <TitleSecond>Book your campervan now</TitleSecond>
        <TitleThird>
          Stay connected! We are always ready to help you.
        </TitleThird>
        <FormFeatures />
      </ContainerRight>
    </Main>
  );
};
