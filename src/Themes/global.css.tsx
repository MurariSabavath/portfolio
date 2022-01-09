import { createGlobalStyle } from "styled-components";

export interface IThemeType {
  body: string;
  text: string;
}

export const GlobalStyles = createGlobalStyle<{ theme: IThemeType }>`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
    font-family: 'Source Code Pro', monospace;
  }
  

}

`;

export const lightTheme = {
  body: "#f1f1f1",
  text: "#121620",
  toggler: "#2A2438",
  accent: "#E21254",
  secondary: "#352f44",
  codeBlock: "#eeeeee",
};

export const darkTheme = {
  body: "#2A2438",
  text: "#f1f1f1",
  toggler: "#f1f1f1",
  accent: "#E21254",
  secondary: "#352f44",
  codeBlock: "#352f44",
};
