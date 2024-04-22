import { Container, GoBack, Title } from './ErrorPage.styled';

const ErrorPage = () => {
  return (
    <Container>
      <Title>404</Title>
      <GoBack to="/">Go back </GoBack>
    </Container>
  );
};

export default ErrorPage;
