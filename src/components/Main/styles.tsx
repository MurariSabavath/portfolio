import styled from "styled-components";

export const Img = styled.img`
  max-width: 200px;
  border-radius: 20px;
`;

export const AboutSection = styled.section`
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

export const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const CodeBlock = styled.div`
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.codeBlock};
  padding-inline: 20px;
  padding-block: 10px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px -2px rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: 2px 2px 8px -2px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 2px 2px 8px -2px rgba(0, 0, 0, 0.4);

  @media (min-width: 768px) {
    padding-top: 20px;
    margin-top: 20px;
  }
`;
