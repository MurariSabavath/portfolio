import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header/Header.component";
import Home from "./pages/Home.component";
import { MainWrapper } from "./styles/shared";

import { GlobalStyles, darkTheme, lightTheme } from "./Themes/global.css";

const App = () => {
  const [theme, setTheme] = useState("light");
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
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <MainWrapper>
          <Header theme={theme} setTheme={setTheme} />
        </MainWrapper>
        <Home />
      </>
    </ThemeProvider>
  );
};

export default App;
