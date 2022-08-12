import { motion } from "framer-motion";
import Contact from "../contact";
import { AboutSection, CodeBlock, FlexBox, Typewriter } from "./styles";

const flexBoxVariant = {
  animate: {
    transition: { staggerChilder: 1, when: "beforeChildren" },
  },
};

const aboutAnimation = {
  initial: {
    x: -100,
  },
  animate: {
    x: 0,
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
};

const codeBlockAnimation = {
  initial: {
    y: -100,
  },
  animate: {
    y: 0,
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
};

const horizontalVarient = {
  initial: {
    y: -50,
  },
  animate: {
    y: 0,
  },
};

const code = {
  initial: {
    y: -100,
  },
  animate: {
    y: 0,
  },
};

const transition = {
  duration: 0.7,
};

const MainContent = () => (
  <>
    <div style={{ position: "relative" }}>
      <FlexBox variants={flexBoxVariant} initial="initial" animate="animate">
        <AboutSection variants={aboutAnimation} transition={transition}>
          <motion.p variants={horizontalVarient} transition={{ duration: 0.8 }}>
            HELLO, I&apos;M
          </motion.p>
          <Typewriter
            variants={horizontalVarient}
            transition={{ duration: 0.8 }}
          >
            Murari Sabavath
          </Typewriter>
          <motion.p variants={horizontalVarient} transition={{ duration: 0.8 }}>
            passionate web developer
          </motion.p>
          <Contact />
        </AboutSection>

        <CodeBlock variants={codeBlockAnimation} transition={transition}>
          <motion.pre variants={code} transition={{ duration: 0.5 }}>
            1 class <b>Murari</b>:
          </motion.pre>
          <motion.pre variants={code} transition={{ duration: 0.5 }}>
            2 &#09; def __init__(self):{" "}
          </motion.pre>
          <motion.pre variants={code} transition={{ duration: 0.5 }}>
            3 &#09; &#09;&#09; &#09;self.name = &quot;Murari Sabavath&quot;;
          </motion.pre>
          <motion.pre variants={code} transition={{ duration: 0.5 }}>
            4 &#09; def say_hello():{" "}
          </motion.pre>
          <motion.pre variants={code} transition={{ duration: 0.5 }}>
            4 &#09; &#09; &#09; print(&quot;Hello world!&quot;)
          </motion.pre>
        </CodeBlock>
      </FlexBox>
    </div>
  </>
);

export default MainContent;
