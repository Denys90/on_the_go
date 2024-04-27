import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const Item = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  margin-top: 40px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s,
    box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 300px;
    border-radius: 12px;
    transition:
      transform 0.3s,
      box-shadow 0.3s;
    margin-right: 20px;

    &:hover {
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    }
  }
`;

export const Name = styled.h2`
  color: ${theme.colors.black};
  margin-bottom: 8px;
  font-size: 24px;
  font-weight: 700;

  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0%;
  text-align: left;
`;

export const CardInfo = styled.div`
  display: flex;
`;

export const BtnDelete = styled.button`
  position: absolute;
  top: 230px;
  right: 20px;
  font-size: 18px;
  color: ${theme.colors.black};
  border: none;
  background-color: ${theme.colors.white};

  &:hover {
    color: ${theme.colors.red};
  }
`;

export const PriceFavorite = styled.p`
  display: block;

  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0%;
  text-align: left;
  color: ${theme.colors.black};
  &::before {
    content: '\\20AC';
    display: inline-block;
  }
`;
export const Box = styled.div`
  display: flex;
  margin-bottom: 100px;
`;
export const NoFavorite = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0%;
  text-align: left;
  padding-top: 80px;
`;
export const Rating_Box = styled.div`
  display: flex;
  margin-bottom: 8px;
`;
export const Wrapper_Rating = styled.div`
  /* display: block;
  justify-content: flex-start; */
`;

export const LocationPinF = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
`;
export const Box_location = styled.div`
  display: flex;
  align-items: center;
`;
