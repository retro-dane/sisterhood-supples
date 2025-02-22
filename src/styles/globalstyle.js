import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #FFF5F5;
    color: #D85C5A;
  }
  h1, h2 {
    color: #C04040;
  }
`;

export default GlobalStyle;