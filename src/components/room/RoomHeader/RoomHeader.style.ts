import { DefaultImage } from 'src/styles/common';
import styled from 'styled-components';

export const Header = styled.header`
  padding: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.header.default};
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    flex-direction: column;
  }
`;

export const LogoWrapper = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-bottom: 16px;
  }
`;

export const Logo = styled(DefaultImage)`
  max-height: 45px;
`;
