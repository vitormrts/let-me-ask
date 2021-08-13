import React from 'react';
import { useTheme } from 'styled-components';
import { ArrowDarkIcon, ArrowLightIcon } from 'src/components/common/Icons';
import { useHistory } from 'react-router';
import {
  BreadcrumbsItem,
  BreadcrumbsItems,
  BreadcrumbsNav,
  Container,
  Content,
  Home,
  Page
} from './Breadcrumbs.style';

type BreadcrumbsProps = {
  page: string;
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ page }) => {
  const theme = useTheme();
  const history = useHistory();

  const ArrowIcon = theme.title === 'light' ? ArrowLightIcon : ArrowDarkIcon;

  return (
    <Container>
      <Content>
        <BreadcrumbsNav>
          <BreadcrumbsItems>
            <BreadcrumbsItem onClick={() => history.push('/')}>
              <Home>Home</Home>
            </BreadcrumbsItem>
            <ArrowIcon />
            <BreadcrumbsItem>
              <Page>{page}</Page>
            </BreadcrumbsItem>
          </BreadcrumbsItems>
        </BreadcrumbsNav>
      </Content>
    </Container>
  );
};

export default Breadcrumbs;
