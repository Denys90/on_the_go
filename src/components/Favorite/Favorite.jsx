import { useAdvert } from '../../Hooks/useAdvert';
import { ShowMoreBtn, SvgLocation, SvgRating } from '../Catalog/Catalog.styled';

import {
  Box,
  BtnDelete,
  CardInfo,
  Item,
  LocationPinF,
  Name,
  NoFavorite,
  PriceFavorite,
  Rating_Box,
  SvgPosition,
  Title,
} from './Favorite.styled';
import svg from 'assets/icons/symbol-defs.svg';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import { Details } from '../Details/Details';

export const Favorite = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { favorite, removeFavorite } = useAdvert();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Title>Favorites campers</Title>
      {favorite.length === 0 ? (
        <NoFavorite>No favorite cemper selected.</NoFavorite>
      ) : (
        <ul>
          {favorite.map((cemper) => (
            <Item key={cemper._id}>
              <CardInfo>
                <img src={cemper.gallery[0]} alt="cemper" />
                <div>
                  <Name>{cemper.name}</Name>

                  <Box>
                    <div>
                      <Rating_Box>
                        <SvgRating>
                          <use href={`${svg}#Rating`}></use>
                        </SvgRating>{' '}
                        <p>{cemper.rating}</p>
                        <p>
                          (
                          {cemper.reviews.reduce(
                            (total, review) => total + review.reviewer_rating,
                            0
                          )}{' '}
                          Reviews)
                        </p>
                      </Rating_Box>
                      <SvgPosition>
                        {' '}
                        <SvgLocation>
                          <use href={`${svg}#icon-map`}></use>
                        </SvgLocation>
                        <LocationPinF>
                          <p> {cemper.location}</p>
                        </LocationPinF>
                      </SvgPosition>
                    </div>
                  </Box>
                  <ShowMoreBtn type="button" onClick={toggleModal}>
                    Show more
                  </ShowMoreBtn>
                </div>
              </CardInfo>
              <BtnDelete type="button" onClick={() => removeFavorite(cemper)}>
                Remove
              </BtnDelete>

              <PriceFavorite>{cemper.price}</PriceFavorite>
              {isOpen && (
                <Modal onClose={toggleModal}>
                  <Details id={cemper._id} toggleModal={toggleModal} />
                </Modal>
              )}
            </Item>
          ))}
        </ul>
      )}
    </div>
  );
};
