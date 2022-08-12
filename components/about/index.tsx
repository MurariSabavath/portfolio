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
                I&apos;m Murari Sabavath, a self-taught passionate web
                developer. Currently working at
                <InlineLink href="https://techatcore.com/" target="_blank">
                  techatcore
                </InlineLink>
                as Software Engineer.
              </p>

              <p>I have been working on web technologies like React js,</p>
            </div>
          </FlexBox>
        </Section>
      </MainWrapper>
    </SectionWrapper>
  </>
);

export default About;
