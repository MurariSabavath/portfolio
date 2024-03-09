import Image from "next/image";
import { MainWrapper } from "../../styles/shared";
import ContentHeader from "../ContentHeader.component";
import {
  FlexBox,
  InlineLink,
  Section,
  SectionWrapper,
  ImgContainer,
} from "./styles";

const About = () => (
  <>
    <SectionWrapper>
      <MainWrapper>
        <Section>
          <ContentHeader>about</ContentHeader>
          <FlexBox>
            {/* <ImgContainer>
              <Image
                src="/static/profile.jpg"
                width={700}
                height={700}
                alt="Murari"
              />
            </ImgContainer> */}

            <div>
              <p>
                I&apos;m Murari Sabavath, a dynamic software engineer with a blend of
                full-time and part-time experience totaling three years.
                Currently immersed in Java Spring Boot for backend and Angular
                for frontend, I also wield expertise in React.js and have delved
                into mobile app development with React Native. My journey
                showcases adaptability, problem-solving prowess, and a
                relentless drive for innovation, shaping me into a versatile
                contributor ready to tackle the challenges of tomorrow&apos;s tech
                landscape.
              </p>
            </div>
          </FlexBox>
        </Section>
      </MainWrapper>
    </SectionWrapper>
  </>
);

export default About;
