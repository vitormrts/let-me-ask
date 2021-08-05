import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
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
    };
    span: {
      default: string;
    };
    header: {
      default: string;
    };
  }
}
