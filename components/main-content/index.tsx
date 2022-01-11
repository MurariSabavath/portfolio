import { AboutSection, CodeBlock, FlexBox, Typewriter } from "./styles";

const MainContent = () => (
  <>
    <div style={{ position: "relative" }}>
      <FlexBox>
        <AboutSection>
          <p>Hello, I&apos;m</p>
          <Typewriter>Murari Sabavath</Typewriter>
          <p>Passionate Web Developer</p>
        </AboutSection>

        <CodeBlock>
          <pre>
            1 class <b>Murari</b> &#123;
          </pre>
          <pre>
            2 &#09;&#09; <b>Murari()</b> &#123;
          </pre>
          <pre>
            3 &#09;&#09;&#09;&#09; this.name = &quot;Murari Sabavath&quot;;
          </pre>
          <pre>4 &#09;&#09; &#125; </pre>
          <pre>5 &#125; </pre>
        </CodeBlock>
      </FlexBox>
    </div>
  </>
);

export default MainContent;
