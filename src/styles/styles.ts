import { createGlobalStyle } from 'styled-components';

export const colors = {
  soft_red: '#E66767',
  peach_light: '#FFEBD9',
  soft_cream: '#FFF8F2',
  white: '#FFFFFF',
};

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    list-style: none;
  }

  body {
    background-color: ${colors.soft_cream};
  }

  .wrapper {
    max-width: 64rem;
    width: 100%;
    margin: 0 auto;
    padding: 0 1rem;
  }
`;
