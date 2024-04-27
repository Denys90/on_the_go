import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import svg from 'assets/icons/symbol-defs.svg';
import {
  Rating_Block,
  SvgLocation,
  SvgRating,
  Location_Reting,
  LocationPin,
  Price,
} from '../Catalog/Catalog.styled';
import {
  BtnContainer,
  BtnFeatures,
  Container,
  ContainerImg,
  Description,
  Images,
  TitleSecond,
  Wrapper,
} from './Details.styled';

import { RenderReviews } from './Reviews/RenderReviews';
import { RenderFeatures } from './Features/RenderFeatures';

export const Details = ({ id }) => {
  const [content, setContent] = useState('');
  const [activeButton, setActiveButton] = useState('Features');

  const adverts = useSelector((state) => state.adverts.adverts);
  const advert = adverts.find((advert) => advert._id === id);

  useEffect(() => {
    if (advert) {
      setContent(RenderFeatures(advert));
    }
  }, [advert]);

  const handleSetActiveButton = (buttonName) => {
    setActiveButton(buttonName);
    if (buttonName === 'Features') {
      setContent(RenderFeatures(advert));
    } else if (buttonName === 'Reviews') {
      setContent(RenderReviews(advert));
    }
  };
  return (
    <div>
      {advert && (
        <Wrapper>
          <Container key={advert._id}>
            <TitleSecond>{advert.name}</TitleSecond>
            <div>
              <Location_Reting>
                <Rating_Block>
                  <SvgRating>
                    <use href={`${svg}#Rating`}></use>
                  </SvgRating>

                  <p>{advert.rating}</p>
                  <p>
                    (
                    {advert.reviews.reduce(
                      (total, review) => total + review.reviewer_rating,
                      0
                    )}{' '}
                    Reviews)
                  </p>
                </Rating_Block>
                <LocationPin>
                  <SvgLocation>
                    <use href={`${svg}#icon-map`}></use>
                  </SvgLocation>
                  <p> {advert.location}</p>
                </LocationPin>
              </Location_Reting>
              <Price>{advert.price}.00</Price>

              <ContainerImg>
                {advert.gallery.map((image, index) => (
                  <li key={index}>
                    <Images src={image} alt="image" />
                  </li>
                ))}
              </ContainerImg>

              <Description>{advert.description}</Description>

              <BtnContainer>
                <BtnFeatures
                  type="button"
                  onClick={() => handleSetActiveButton('Features')}
                  active={activeButton === 'Features'}
                >
                  Features
                </BtnFeatures>
                <BtnFeatures
                  type="button"
                  onClick={() => handleSetActiveButton('Reviews')}
                  active={activeButton === 'Reviews'}
                >
                  Reviews
                </BtnFeatures>
              </BtnContainer>
            </div>
          </Container>
        </Wrapper>
      )}
      {content && <div>{content}</div>}
    </div>
  );
};
