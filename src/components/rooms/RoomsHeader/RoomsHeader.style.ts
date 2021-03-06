import { Container as SwitcherTheme } from 'src/components/common/SwitcherTheme/SwitcherTheme.style';
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
  ${SwitcherTheme} {
    margin-right: auto;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    flex-direction: column;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  svg {
    max-width: 100px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-bottom: 16px;
  }
`;
