import { useContext } from "react";
import { BiSun } from "react-icons/bi";
import { BsFillMoonFill } from "react-icons/bs";
import { ThemeContext } from "styled-components";
import { Button, FlexBox, HeaderLink, HeaderSection, Section } from "./styles";

export interface IHeader {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({ theme, setTheme }: IHeader) => {
  const fname = "Murari";

  const lname = "Sabavath";
  const themeContext = useContext(ThemeContext);

  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? "light" : "dark";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
  };

  return (
    <Section>
      <HeaderSection>
        <HeaderLink href="/">
          <span>{fname}</span>
          <span>{lname}</span>
        </HeaderLink>
        <FlexBox>
          <Button
            onClick={toggleTheme}
            theme={themeContext}
            aria-label="change theme"
          >
            {isDarkTheme ? <BiSun /> : <BsFillMoonFill />}
          </Button>
        </FlexBox>
      </HeaderSection>
    </Section>
  );
};

export default Header;
