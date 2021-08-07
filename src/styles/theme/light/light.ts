import { DefaultTheme } from 'styled-components';

const light: DefaultTheme = {
  title: 'light',

  breakpoints: {
    xl: 1199,
    lg: 991,
    md: 767
  },
  background: {
    default: '#f8f8f8',
    secondary: '#fff'
  },
  colors: {
    main: '#296EB4',
    secondary: '#fff',
    pink: '#e559f9'
  },
  text: {
    main: '#29292e',
    secondary: '#737380'
  },
  question: {
    answered: '#dbdcdd',
    highlighted: '#f4f0ff'
  },
  input: {
    default: '#a8a8b3'
  },
  textarea: {
    default: '#fefefe'
  },
  icons: {
    google: '#ea4335',
    logo: '#1789FC'
  },
  span: {
    default: '#737388'
  },
  header: {
    default: '#e2e2e2'
  }
};

export default light;
