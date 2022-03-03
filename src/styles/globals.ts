import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
 :root {
        --background: #9ADCFF;
        --title: #141E27;
        --white: #FFFF;
        --purple: #5902EC;
  }
      
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
    font-family: "Poppins", sans-serif;
  }

  body,
  input,
  textarea,
  button {
    font-family: "Poppins", sans-serif;
    
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }


`;