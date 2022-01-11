import styled from "styled-components";

export const Header = styled.h2`
  color: ${({ theme }) => theme.accent};
  margin: 0;
`;

export const MainWrapper = styled.section`
  margin-inline: 10%;

  & {
    @media (max-width: 768px) {
      margin-inline: 20px;
    }
  }
`;
