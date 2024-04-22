import {
  Container,
  ContainerDescription,
  Title_Price,
  Image,
  Price,
  Location_Reting,
  SvgRating,
  SvgLocation,
  Description,
  StyleDetails,
  SVGIcons,
  ShowMoreBtn,
  Rating_Block,
  LocationPin,
  SvgHeart,
} from './Catalog.styled';
import svg from 'assets/icons/symbol-defs.svg';
import { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import { Details } from '../Details/Details';
import { useAdvert } from '../../Hooks/useAdvert';
import Automatic from 'assets/icons/Automatic.svg';

export const CatalogList = ({ advert }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const { addFavorite, removeFavorite, favorite } = useAdvert();

  useEffect(() => {
    setIsFavorite(favorite.some((item) => item._id === advert._id));
  }, [advert, favorite]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleFavoriteClick = () => {
    const isFavorite = favorite.some((item) => item._id === advert._id);
    if (isFavorite) {
      removeFavorite(advert);
    } else {
      addFavorite(advert);
    }
    setIsFavorite(!isFavorite);
  };
  const {
    _id,
    name,
    price,
    rating,
    location,
    reviews,
    adults,
    description,
    details,
    gallery,
    transmission,
    engine,
  } = advert;
  return (
    <>
      <Container key={_id}>
        <Image src={gallery[0]} alt="img" />
        <ContainerDescription>
          <Title_Price>
            <h2> {name}</h2>
            <Price>
              {price}
              <SvgHeart isFavorite={isFavorite}>
                <use
                  href={`${svg}#icon-heart__Default`}
                  onClick={handleFavoriteClick}
                ></use>
              </SvgHeart>
            </Price>
          </Title_Price>
          <Location_Reting>
            <SvgRating>
              <use href={`${svg}#Rating`}></use>
            </SvgRating>
            <Rating_Block>
              <p>{rating}</p>
              <p>
                (
                {reviews.reduce(
                  (total, review) => total + review.reviewer_rating,
                  0
                )}{' '}
                Reviews)
              </p>
            </Rating_Block>

            <LocationPin>
              <SvgLocation>
                <use href={`${svg}#icon-map-pin`}></use>
              </SvgLocation>
              <p> {location}</p>
            </LocationPin>
          </Location_Reting>
          <Description>{description}</Description>

          <StyleDetails>
            <SVGIcons>
              <use href={`${svg}#icon-Users`}></use>
            </SVGIcons>
            {adults} adults
          </StyleDetails>
          <StyleDetails>
            <SVGIcons>
              <use href={`${Automatic}`}></use>
            </SVGIcons>
            {transmission}
          </StyleDetails>
          <StyleDetails>
            <SVGIcons>
              <use href={`${svg}#icon-Petrol`}></use>
            </SVGIcons>
            {engine}
          </StyleDetails>

          {details.kitchen > 0 ? (
            <StyleDetails>
              <SVGIcons>
                <use href={`${svg}#icon-kitchen`}></use>
              </SVGIcons>
              {details.kitchen.length > 0 ? 'kitchen' : null} kitchen
            </StyleDetails>
          ) : null}

          <StyleDetails>
            <SVGIcons>
              <use href={`${svg}#icon-beds`}></use>
            </SVGIcons>
            {details.beds} beds
          </StyleDetails>
          <StyleDetails>
            <SVGIcons>
              <use href={`${svg}#icon-AC`}></use>
            </SVGIcons>
            {details.airConditioner.length > 0 ? 'airConditioner' : null} AC
          </StyleDetails>
          <ShowMoreBtn type="button" onClick={toggleModal}>
            Show more
          </ShowMoreBtn>
        </ContainerDescription>
        {isOpen && (
          <Modal onClose={toggleModal}>
            <Details id={_id} toggleModal={toggleModal} />
          </Modal>
        )}
      </Container>
    </>
  );
};
