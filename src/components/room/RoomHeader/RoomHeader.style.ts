import { DefaultImage } from 'src/styles/common';
import styled from 'styled-components';

export const Header = styled.header`
  padding: 24px;
  border-bottom: 1px solid #e2e2e2;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled.div``;

export const Logo = styled(DefaultImage)`
  max-height: 45px;
`;
