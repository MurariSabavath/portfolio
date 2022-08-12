import styled from "styled-components";
import { motion } from "framer-motion";

export const ContactContent = styled(motion.div)`
  padding-top: 30px;
  display: flex;
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
