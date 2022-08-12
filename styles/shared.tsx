import styled from "styled-components";

export const Header = styled.div`
  display: inline-block;
  margin-top: 2em;
  margin-bottom: 0.5em;
  h1 {
    padding-block: 5px;
    color: ${({ theme }) => theme.text};
    margin: 0;
    text-transform: capitalize;
  }
`;

export const MainWrapper = styled.section`
  margin-inline: 10%;

  & {
    @media (max-width: 768px) {
      margin-inline: 20px;
    }
  }
`;

export const Underline = styled.div<{ width: string }>`
  padding-inline: 10px;
  margin-top: 5px;
  height: 4px;
  border-radius: 100px;
  background: ${({ theme }) => theme.accent};
  width: ${(props) => props.width};
`;
