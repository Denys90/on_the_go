import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const MainContainer = styled.ul`
  display: flex;
`;

export const UserList = styled.ul`
  margin-top: 44px;
  width: 430px;
`;

export const Avatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100px;
  background: ${theme.colors.lightGray};
  margin-right: 18px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 26px;
  color: #e44848;
`;

export const RatingBox = styled.div`
  display: flex;
`;

export const Name = styled.p`
  display: block;
  margin-bottom: 4px;
`;

export const UserRating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const Comment = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px;

  color: rgb(71, 84, 103);
`;

export const UserItem = styled.li`
  margin-bottom: 24px;
  &:nth-last-of-type(1) {
    margin-bottom: 0;
  }
`;
