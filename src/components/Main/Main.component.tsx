import { AboutSection, CodeBlock, FlexBox } from "./styles";

const Main = () => (
  <>
    <FlexBox>
      <AboutSection>
        <p>Hello, I'm</p>
        <h1>Murari Sabavath</h1>
        <p>Passionate Web Developer</p>
      </AboutSection>

      <CodeBlock>
        <pre>
          1 class <b>Murari</b> &#123;
        </pre>
        <pre>
          2 &#09;&#09; <b>Murari()</b> &#123;
        </pre>
        <pre>3 &#09;&#09;&#09;&#09; this.name = "Murari Sabavath";</pre>
        <pre>4 &#09;&#09; &#125; </pre>
        <pre>5 &#125; </pre>
      </CodeBlock>
    </FlexBox>
  </>
);

export default Main;
