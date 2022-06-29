import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        background-color: #0e0e0e;
        font-family: 'Bebas Neue', sans-serif;
    }
`;

export default GlobalStyles;
