import styled from "styled-components";

export const Header = styled.h2`
  color: ${({ theme }) => theme.accent};
  margin: 0;
`;

export const MainWrapper = styled.section`
  margin-inline: 20%;

  & {
    @media (max-width: 768) {
      margin-inline: 20px;
    }
    @media (max-width: 900px) {
      margin-inline: 10%;
    }
  }
`;
