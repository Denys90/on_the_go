import grayStar from 'assets/icons/gray_star.svg';
import yellowStar from 'assets/icons/yellow_star.svg';
import { RatingBox } from './RenderReviews.styled';

const RatingStars = ({ rating }) => {
  const grayStars = 5 - rating;
  const yellowStars = rating;

  const starIcons = [];

  for (let i = 0; i < yellowStars; i++) {
    starIcons.push(
      <img key={`yellow-${i}`} src={yellowStar} alt="Yellow Star" />
    );
  }

  for (let i = 0; i < grayStars; i++) {
    starIcons.push(<img key={`gray-${i}`} src={grayStar} alt="Gray Star" />);
  }

  return <RatingBox>{starIcons}</RatingBox>;
};

export default RatingStars;
