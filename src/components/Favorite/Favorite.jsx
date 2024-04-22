import { useAdvert } from '../../Hooks/useAdvert';
import {
  LocationPin,
  Rating_Block,
  ShowMoreBtn,
  SvgLocation,
  SvgRating,
} from '../Catalog/Catalog.styled';

import {
  Box,
  BtnDelete,
  CardInfo,
  Item,
  Name,
  NoFavorite,
  PriceFavorite,
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
                    <SvgRating>
                      <use href={`${svg}#Rating`}></use>
                    </SvgRating>
                    <Rating_Block>
                      <p>{cemper.rating}</p>
                      <p>
                        (
                        {cemper.reviews.reduce(
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
                      <p> {cemper.location}</p>
                    </LocationPin>
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
