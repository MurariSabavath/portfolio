import Head from "next/head";
import About from "../components/about";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Header from "../components/header";
import MainContent from "../components/main-content";
import Projects from "../components/projects";
import { MainWrapper } from "../styles/shared";

export interface IHomeProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const Home = ({ theme, setTheme }: IHomeProps) => {
  return (
    <div>
      <Head>
        <title>Murari Sabavath</title>
      </Head>
      <MainWrapper>
        <Header theme={theme} setTheme={setTheme} />
        <MainContent />
      </MainWrapper>
      <About />
      <MainWrapper>
        <Projects />
        <Contact />
        <Footer />
      </MainWrapper>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9362350772892795"
        crossOrigin="anonymous"
      />
    </div>
  );
};

export default Home;
