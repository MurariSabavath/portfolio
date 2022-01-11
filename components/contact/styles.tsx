import styled from "styled-components";

export const ContactContent = styled.div`
  text-align: center;
`;

export const ContactLink = styled.a`
  text-decoration: none;
  font-size: 1.75rem;
  margin-inline: 8px;
  color: ${({ theme }) => theme.text};
  transition: 0.2s linear;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;
