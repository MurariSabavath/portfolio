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
            <ImgContainer>
              <Image
                src="/static/profile.jpg"
                width={700}
                height={700}
                alt="Murari"
              />
            </ImgContainer>

            <div>
              <p>
                I&apos;m Murari Sabavath, a self-taught passionate web
                developer. Currently working at
                <InlineLink href="https://techatcore.com/" target="_blank">
                  techatcore
                </InlineLink>
                as software intern.
              </p>

              <p>
                I have been working on web technologies like React js, Node js,
                Django for past couple of years. I&apos;m currently learning web
                technologies like
                <InlineLink href="https://nextjs.org/" target="_blank">
                  Next js
                </InlineLink>
                and blockchain technologies like
                <InlineLink
                  href="https://docs.soliditylang.org/en/v0.8.11/"
                  target="_blank"
                >
                  Solidity.
                </InlineLink>
              </p>
            </div>
          </FlexBox>
        </Section>
      </MainWrapper>
    </SectionWrapper>
  </>
);

export default About;
