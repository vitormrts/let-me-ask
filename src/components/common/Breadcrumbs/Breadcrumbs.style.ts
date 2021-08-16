import { DefaultContainer, DefaultContent } from 'src/styles/common';
import styled from 'styled-components';

export const Container = styled(DefaultContainer)`
  margin-top: 32px;
`;

export const Content = styled(DefaultContent)``;

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
