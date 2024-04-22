import { Description, Kard, Title, Wrapper } from './About.styled';
// import { Infinite } from './Infinite/Infinite';

const About = () => {
  return (
    <>
      <div>{/* <Infinite /> */}</div>
      <Wrapper>
        <Kard>
          <Title>Convenient reservation system</Title>
          <Description>
            You can easily book a camper online by choosing the date, duration
            and other additional options. It is fast, convenient and reliable.
          </Description>
        </Kard>

        <Kard>
          <Title>Support and service</Title>
          <Description>
            If you have any questions or need help, there is usually a support
            team on the site ready to help you. Also, after the rental, there
            may be support services during the trip, so that you have a calm and
            comfortable trip.
          </Description>
        </Kard>

        <Kard>
          <Title>Full description of transport</Title>
          <Description>
            Each camper has a detailed description with all the amenities it
            has. You can check the size, specifications, photos and user reviews
            before making a decision.
          </Description>
        </Kard>

        <Kard>
          <Title>Affordable prices</Title>
          <Description>
            The site offers competitive prices for renting camper vans. You can
            find options for different budgets, allowing you to plan your trip
            without worrying about the costs.
          </Description>
        </Kard>

        <Kard>
          <Title>A wide choice of transport</Title>
          <Description>
            The site allows you to choose a camper or motor home that best suits
            your needs and budget. From compact campers for a couple to large
            motorhomes for a large family or friends.
          </Description>
        </Kard>
      </Wrapper>
    </>
  );
};

export default About;
