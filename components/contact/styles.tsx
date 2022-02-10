import styled from "styled-components";

export const ContactContent = styled.div`
  padding-top: 30px;
`;

export const ContactLink = styled.a`
  text-decoration: none;
  font-size: 1.75rem;
  margin-right: 15px;
  color: ${({ theme }) => theme.text};
  transition: 0.2s linear;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;
