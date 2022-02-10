import Contact from "../contact";
import { AboutSection, CodeBlock, FlexBox, Typewriter } from "./styles";

const MainContent = () => (
  <>
    <div style={{ position: "relative" }}>
      <FlexBox>
        <AboutSection>
          <p>hello, i&apos;m</p>
          <Typewriter>Murari Sabavath</Typewriter>
          <p>passionate web developer</p>
          <Contact />
        </AboutSection>

        <CodeBlock>
          <pre>
            1 class <b>Murari</b>:
          </pre>
          <pre>2 &#09; def __init__(self): </pre>
          <pre>
            3 &#09; &#09;&#09; &#09;self.name = &quot;Murari Sabavath&quot;;
          </pre>
          <pre>4 &#09; def say_hello(): </pre>
          <pre>4 &#09; &#09; &#09; print(&quot;Hello world!&quot;)</pre>
        </CodeBlock>
      </FlexBox>
    </div>
  </>
);

export default MainContent;
