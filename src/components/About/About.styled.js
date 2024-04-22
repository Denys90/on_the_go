import styled from '@emotion/styled';
import { Row } from 'antd';
import { Typography } from 'antd/es';
const { Paragraph } = Typography;
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 40px;
`;
export const Kards = styled(Row)`
  display: block;
`;
export const Description = styled(Paragraph)`
  font-size: 18px;
`;
