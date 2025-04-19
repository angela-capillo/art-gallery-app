import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html, body {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-items: center;
    justify-content: center;
    margin: 0 auto;
    overflow: hidden;
  }

  html {
    background-color: #ccc;
  }

  body {
    margin: 0;
    max-width: 420px;
    font-family: system-ui;
    background-color: #fff;
  }
`;
