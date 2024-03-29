import styled from "styled-components";
import { motion } from "framer-motion";

export const Img = styled.img`
  max-width: 200px;
  border-radius: 20px;
`;

export const AboutSection = styled(motion.section)`
  overflow: hidden;
  padding-left: 10px;
  margin-left: -10px;
  > * {
    cursor: auto;
    margin: 0;

    @media (max-width: 768px) {
      text-align: center;
    }
  }
  h1 {
    color: ${({ theme }) => theme.accent};
    font-size: 2em;
  }
  p:nth-child(1) {
    font-size: 1.2rem;
  }
  p:nth-child(2) {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.65;
    margin-bottom: 20px;
  }
  span {
    color: ${({ theme }) => theme.accent};
  }
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const FlexBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const CodeBlock = styled(motion.div)`
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.codeBlock};
  padding-inline: 20px;
  padding-block: 10px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px -2px rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: 2px 2px 8px -2px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 2px 2px 8px -2px rgba(0, 0, 0, 0.4);
  overflow: hidden;

  @media (min-width: 768px) {
    padding-top: 20px;
    margin-top: 20px;
  }
`;

export const Square = styled.div`
  width: 50px;
  height: 30px;
  border: 2px solid ${({ theme }) => theme.accent};
  position: absolute;
  top: 95%;
  right: 30%;

  &:hover {
    animation: rotation 1s infinite;
  }
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Circle = styled.div`
  border: 2px solid ${({ theme }) => theme.accent};
  width: 50px;
  height: 50px;
  position: absolute;
  top: 80%;
  left: 20%;
  border-radius: 50%;
  animation: skew-animation 5s infinite;

  @keyframes skew-animation {
    0% {
      margin-top: 15px;
    }
    25% {
      margin-top: -15px;
    }
    50% {
      margin-top: 15px;
    }
    75% {
      margin-top: -15px;
    }
    100% {
      margin-top: 0px;
    }
  }
`;

export const Typewriter = styled(motion.h2)`
  color: #dedede;
  font-size: 1.9em;
  color: ${({ theme }) => theme.accent};
  white-space: nowrap;
  text-transform: uppercase;
`;
