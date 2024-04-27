import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const MainContainer = styled.div`
  margin-top: 60px;
  display: block;
`;
export const Container = styled.div`
  width: 888px;

  padding: 24px;
  display: flex;
  flex: none;
  box-sizing: border-box;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  margin-bottom: 32px;
`;

export const Image = styled.img`
  width: 290px;
  height: 310px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
`;

export const Price = styled.p`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0%;
  text-align: left;
  margin-bottom: 24px;
  &::before {
    content: '\\20AC';
    display: inline-block;
  }
`;

export const SvgHeart = styled.svg`
  width: 23px;
  height: 23px;
  stroke: #111;
  fill: white;
  margin-left: 13px;
  cursor: pointer;
  fill: ${(props) => (props.isFavorite ? `${theme.colors.red}` : 'white')};
  stroke: ${(props) =>
    props.isFavorite ? `${theme.colors.red}` : `${theme.colors.black}`};
`;

export const SvgRating = styled.svg`
  width: 16px;
  height: 16px;
  margin-right: 4px;
  margin-bottom: 4px;
`;

export const ContainerDescription = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 24px;

  h2 {
    font-size: 24px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0%;
    text-align: left;
  }
`;

export const Title_Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 8px;
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0%;
`;

export const Location_Reting = styled.div`
  font-size: 16px;
  padding-bottom: 24px;
  display: flex;
  align-items: center;
`;

export const LocationPin = styled.div`
  font-size: 16px;

  display: flex;
  align-items: center;
  margin-left: 30px;
`;

export const SvgLocation = styled.svg`
  display: block;
  width: 16px;
  height: 20px;
  fill: white;
  stroke: #111;
  margin-right: 5px;
  margin-bottom: 4px;
`;

export const Description = styled.p`
  color: ${theme.colors.gray};
  width: 525px;
  height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
`;

export const SVGIcons = styled.svg`
  display: block;
  width: 20px;
  height: 20px;
  margin-right: 11px;

  stroke: black;
`;
export const StyleDetails = styled.div`
  width: auto;

  margin-top: 24px;
  margin-right: 8px;
  margin-bottom: 8px;

  padding: 10px 15px;
  background-color: #f2f4f7;

  border: none;
  border-radius: 100px;

  text-align: center;
  text-decoration: none;
  display: inline-flex;
  align-items: center;

  &:nth-last-of-type(-n + 2) {
    margin-top: 0px;
  }
`;

export const ShowMoreBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: none;
  color: white;
  margin-top: 30px;
  align-items: center;
  padding: 16px 40px 16px 40px;
  border-radius: 200px;
  background: ${theme.colors.red};
  cursor: pointer;

  &:hover {
    box-shadow: ${theme.colors.btnShadow};
  }
`;

export const LoadMore = styled.button`
  margin: auto;
  margin-bottom: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: none;
  margin-top: 16px;
  align-items: center;
  padding: 16px 40px 16px 40px;
  border-radius: 200px;

  box-shadow: ${theme.colors.boxShadow};
  background: white;
  &:hover {
    box-shadow: ${theme.colors.btnShadow};
  }
`;
export const Rating_Block = styled.div`
  margin: 0;
  padding: 0;
  color: ${theme.colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
`;
