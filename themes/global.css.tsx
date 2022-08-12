import { createGlobalStyle } from "styled-components";

export interface IThemeType {
  primary: string;
  secondary: string;
  text: string;
  toggler: string;
  accent: string;
  codeBlock: string;
}

export const GlobalStyles = createGlobalStyle<{ theme: IThemeType }>`
  body {
    margin: 0;
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
    font-family:'Montserrat', sans-serif;
  }
`;

export const lightTheme = {
  primary: "#f1f1f1",
  secondary: "#352f44",
  text: "#121620",
  toggler: "#202020",
  accent: "#E21254",
  codeBlock: "#eeeeee",
};

export const darkTheme = {
  primary: "#202020",
  secondary: "#352f44",
  text: "#f1f1f1",
  toggler: "#fcba03",
  accent: "#E21254",
  codeBlock: "#313131",
};
