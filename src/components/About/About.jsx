import { Typography, Row, Col, Divider } from 'antd';
import { Description, Kards, Wrapper } from './About.styled';

const { Title } = Typography;

const About = () => {
  return (
    <Wrapper>
      <Row justify="center">
        <Col xs={24} md={18} lg={12}>
          <Kards>
            <div style={{ marginTop: '1rem' }}>
              <Title level={3}>A wide choice of transport</Title>
              <Description>
                The site allows you to choose a camper or motor home that best
                suits your needs and budget. From compact campers for a couple
                to large motorhomes for a large family or friends.
              </Description>
            </div>
            <Divider />
            <Row justify="center"></Row>
          </Kards>
        </Col>
      </Row>

      <Row justify="center">
        <Col xs={24} md={18} lg={12}>
          <Kards>
            <div style={{ marginTop: '1rem' }}>
              <Title level={3}>Affordable prices</Title>
              <Description>
                The site offers competitive prices for renting camper vans. You
                can find options for different budgets, allowing you to plan
                your trip without worrying about the costs.
              </Description>
            </div>
            <Divider />
            <Row justify="center"></Row>
          </Kards>
        </Col>
      </Row>

      <Row justify="center">
        <Col xs={24} md={18} lg={12}>
          <Kards>
            <div style={{ marginTop: '1rem' }}>
              <Title level={3}>Full description of transport</Title>
              <Description>
                Each camper has a detailed description with all the amenities it
                has. You can check the size, specifications, photos and user
                reviews before making a decision.
              </Description>
            </div>
            <Divider />
            <Row justify="center"></Row>
          </Kards>
        </Col>
      </Row>

      <Row justify="center">
        <Col xs={24} md={18} lg={12}>
          <Kards>
            <div style={{ marginTop: '1rem' }}>
              <Title level={3}>Support and service</Title>
              <Description>
                If you have any questions or need help, there is usually a
                support team on the site ready to help you. Also, after the
                rental, there may be support services during the trip, so that
                you have a calm and comfortable trip.
              </Description>
            </div>
            <Divider />
            <Row justify="center"></Row>
          </Kards>
        </Col>
      </Row>

      <Row justify="center">
        <Col xs={24} md={18} lg={12}>
          <Kards>
            <div style={{ marginTop: '1rem' }}>
              <Title level={3}>Convenient reservation system</Title>
              <Description>
                You can easily book a camper online by choosing the date,
                duration and other additional options. It is fast, convenient
                and reliable.
              </Description>
            </div>
            <Divider />
            <Row justify="center"></Row>
          </Kards>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default About;
