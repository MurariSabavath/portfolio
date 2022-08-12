import styled from "styled-components";
import { motion } from "framer-motion";

export const ImageCard = styled(motion.div)`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);

  & {
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export const ImageMain = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 40px;
  border-radius: 10px;
  cursor: pointer;
  background: ${({ theme }) => theme.codeBlock};
  box-shadow: 4px 3px 10px -6px rgba(0, 0, 0, 0.51);

  /* &:hover {
    opacity: 0.6;
    scale: 1.2;
  } */
`;
