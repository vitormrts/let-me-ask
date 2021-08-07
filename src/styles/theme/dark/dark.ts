import { DefaultTheme } from 'styled-components';

const dark: DefaultTheme = {
  title: 'dark',

  breakpoints: {
    xl: 1199,
    lg: 991,
    md: 767
  },
  background: {
    default: '#202B3C',
    secondary: '#435B7C'
  },
  colors: {
    main: '#0358AE',
    secondary: '#FFF',
    pink: '#B908D1'
  },
  text: {
    main: '#fefefe',
    secondary: '#737380'
  },
  question: {
    answered: '#2A394F',
    highlighted: '#5D84B9'
  },
  input: {
    default: '#56749E'
  },
  textarea: {
    default: '#EBEBEB'
  },
  icons: {
    google: '#ea4335',
    logo: '#468C98'
  },
  span: {
    default: '#737388'
  },
  header: {
    default: '#C4C4C4'
  }
};

export default dark;
