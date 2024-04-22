import { SVGIcons } from '../../Catalog/Catalog.styled';
import svg from 'assets/icons/symbol-defs.svg';
import {
  ContainerIcon,
  ContainerLeft,
  ContainerRight,
  FormContainer,
  Main,
  StyleDetailsFeatures,
  Title,
  TitleSecond,
  TitleThird,
  VehicleDetailsContainer,
} from './RenderFeatures.styled';
import FormFeatures from '../Form/FormFeatures';

export const RenderFeatures = (advert) => {
  return (
    <Main>
      <ContainerLeft>
        <ContainerIcon>
          <StyleDetailsFeatures>
            <SVGIcons>
              <use href={`${svg}#icon-Users`}></use>
            </SVGIcons>
            {advert.adults} adults
          </StyleDetailsFeatures>

          <StyleDetailsFeatures>
            <SVGIcons>
              <use href={`${svg}#icon-Automatic`}></use>
            </SVGIcons>
            {advert.transmission}
          </StyleDetailsFeatures>

          <StyleDetailsFeatures>
            <SVGIcons>
              <use href={`${svg}#icon-AC`}></use>
            </SVGIcons>
            {advert.details.airConditioner.length > 0 ? 'airConditioner' : null}{' '}
            AC
          </StyleDetailsFeatures>

          <StyleDetailsFeatures>
            <SVGIcons>
              <use href={`${svg}#icon-Petrol`}></use>
            </SVGIcons>
            {advert.details.gas}
          </StyleDetailsFeatures>

          <StyleDetailsFeatures>
            <SVGIcons>
              <use href={`${svg}#icon-kitchen`}></use>
            </SVGIcons>
            {advert.details.kitchen.length > 0 ? 'kitchen' : null} kitchen
          </StyleDetailsFeatures>

          <StyleDetailsFeatures>
            <SVGIcons>
              <use href={`${svg}#icon-beds`}></use>
            </SVGIcons>
            {advert.details.beds} beds
          </StyleDetailsFeatures>

          <StyleDetailsFeatures>
            <SVGIcons>
              <use href={`${svg}#icon-Conditioner`}></use>
            </SVGIcons>
            {advert.details.beds} air conditioner
          </StyleDetailsFeatures>

          <StyleDetailsFeatures>
            <SVGIcons>
              <use href={`${svg}#icon-CD`}></use>
            </SVGIcons>
            {advert.details.CD} CD
          </StyleDetailsFeatures>

          <StyleDetailsFeatures>
            <SVGIcons>
              <use href={`${svg}#icon-Radio`}></use>
            </SVGIcons>
            {advert.details.radio} Radio
          </StyleDetailsFeatures>

          <StyleDetailsFeatures>
            <SVGIcons>
              <use href={`${svg}#icon-hob`}></use>
            </SVGIcons>
            {advert.details.hob} hob
          </StyleDetailsFeatures>
        </ContainerIcon>
        <VehicleDetailsContainer>
          <Title>Vehicle details</Title>
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
