import profile from "../../assets/profile.jpg";
import { MainWrapper } from "../../styles/shared";
import ContentHeader from "../ContentHeader.component";
import { FlexBox, Img, LinkToIntern, Section, SectionWrapper } from "./styles";

const About = () => (
  <>
    <SectionWrapper>
      <MainWrapper>
        <Section>
          <ContentHeader>About</ContentHeader>
          <FlexBox>
            <Img src={profile} />
            <p>
              I'm Murari Sabavath, a self-taught passionate web developer.
              Currently woring at
              <LinkToIntern href="https://techatcore.com/" target="_blank">
                techatcore
              </LinkToIntern>
              as software intern.
            </p>
          </FlexBox>
        </Section>
      </MainWrapper>
    </SectionWrapper>
  </>
);

export default About;
