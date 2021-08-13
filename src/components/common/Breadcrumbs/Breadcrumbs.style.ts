import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 32px;
  margin-top: 32px;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding: 0 24px;
  }
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;

export const BreadcrumbsNav = styled.nav``;

export const BreadcrumbsItems = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const BreadcrumbsItem = styled.li``;

export const Home = styled.span`
  cursor: pointer;
`;

export const Page = styled.span`
  opacity: 0.3;
`;
