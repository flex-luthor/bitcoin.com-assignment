import { createGlobalStyle, DefaultTheme } from "styled-components";
import { ThemeType } from "../../App.js";

const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        background-color: ${({ theme }) => theme.colors.black};
        font-family: 'Bebas Neue', sans-serif;
    }
`;

export default GlobalStyles;
