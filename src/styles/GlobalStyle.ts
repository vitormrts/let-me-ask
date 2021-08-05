import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.background.default};
    color: ${({ theme }) => theme.text.main}
  }

  body, input, button, textarea {
    font: 400 16px 'Roboto', sans-serif;
  }
`;

export default GlobalStyle;
