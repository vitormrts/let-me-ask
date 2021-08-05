import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: {
      default: string;
      secondary: string;
    };
    colors: {
      main: string;
    };
  }
}
