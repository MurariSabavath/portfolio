import About from "../components/About/About.component";
import Contact from "../components/Contact/Contact.component";
import ContentHeader from "../components/ContentHeader.component";
import Footer from "../components/Footer/Footer.component";
import Main from "../components/Main/Main.component";
import Projects from "../components/Projects/Projects.component";
import { MainWrapper } from "../styles/shared";

const Home = () => (
  <>
    <MainWrapper>
      <div id="">
        <Main />
      </div>
    </MainWrapper>
    <div id="about">
      <About />
    </div>
    <MainWrapper>
      <div id="techstack">
        <ContentHeader>Techstack</ContentHeader>
        <p>coming soon...</p>
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </MainWrapper>
  </>
);

export default Home;
