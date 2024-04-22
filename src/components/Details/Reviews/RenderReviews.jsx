import {
  ContainerRight,
  TitleSecond,
  TitleThird,
} from '../Features/RenderFeatures.styled';
import FormFeatures from '../Form/FormFeatures';
import RatingStars from './RenderRating';
import {
  Avatar,
  Comment,
  MainContainer,
  Name,
  UserItem,
  UserList,
  UserRating,
} from './RenderReviews.styled';

export const RenderReviews = ({ reviews }) => {
  return (
    <MainContainer>
      <UserList>
        {reviews.map((review, index) => (
          <UserItem key={index}>
            <UserRating>
              <Avatar>{review.reviewer_name.charAt(0)}</Avatar>
              <div>
                <Name>{review.reviewer_name}</Name>
                <div>
                  {' '}
                  <RatingStars rating={review.reviewer_rating} />
                </div>
              </div>
            </UserRating>

            <Comment>{review.comment}</Comment>
          </UserItem>
        ))}
      </UserList>
      <ContainerRight>
        <TitleSecond>Book your campervan now</TitleSecond>{' '}
        <TitleThird>
          Stay connected! We are always ready to help you.
        </TitleThird>
        <FormFeatures />
      </ContainerRight>
    </MainContainer>
  );
};
