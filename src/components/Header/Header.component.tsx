import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Button, HeaderLink, Section } from "./styles";

export interface IHeader {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({ theme, setTheme }: IHeader) => {
  const fname = "Murari";

  const lname = "Sabavath";
  const themeContext = useContext(ThemeContext);
  console.info(themeContext);

  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? "light" : "dark";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
  };

  return (
    <Section>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <HeaderLink href="/">
          <span>{fname}</span>
          <span>{lname}</span>
        </HeaderLink>
        <Button onClick={toggleTheme} theme={themeContext}>
          {isDarkTheme ? (
            <span aria-label="Light mode" role="img">
              🌞
            </span>
          ) : (
            <span aria-label="Dark mode" role="img">
              🌜
            </span>
          )}
        </Button>
      </div>
    </Section>
  );
};

export default Header;
