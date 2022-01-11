import styled from "styled-components";

export const Header = styled.div`
  display: inline-block;
  margin-block: 20px;
  h3 {
    padding-block: 5px;
    color: ${({ theme }) => theme.text};
    margin: 0;
  }
  div:nth-child(1) {
    height: 10px;
    background: red;
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
