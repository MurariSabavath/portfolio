import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../components/layout";
import { darkTheme, GlobalStyles, lightTheme } from "../themes/global.css";

export interface IProps {
  Component: React.ElementType;
  pageProps: any;
}

const MyApp = ({ Component, pageProps }: IProps) => {
  const [theme, setTheme] = useState("dark");
  const isDarkTheme = theme === "dark";

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} theme={theme} setTheme={setTheme} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
