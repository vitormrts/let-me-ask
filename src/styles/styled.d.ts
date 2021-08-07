import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    breakpoints: {
      xl: number;
      lg: number;
      md: number;
    };
    background: {
      default: string;
      secondary: string;
    };
    colors: {
      main: string;
      secondary: string;
      pink: string;
    };
    text: {
      main: string;
      secondary: string;
    };
    question: {
      answered: string;
      highlighted: string;
    };
    input: {
      default: string;
    };
    textarea: {
      default: string;
    };
    icons: {
      google: string;
      logo: string;
    };
    span: {
      default: string;
    };
    header: {
      default: string;
    };
  }
}
