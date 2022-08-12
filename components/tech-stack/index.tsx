import Image from "next/image";
import { motion } from "framer-motion";
import { languages } from "../../constants";
import ContentHeader from "../ContentHeader.component";
import { ImageCard, ImageMain } from "./styles";

const parent = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const child = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
};

const TechStack = () => {
  return (
    <>
      <ContentHeader>Tech stack</ContentHeader>
      <ImageCard variants={parent} initial="initial" animate="animate">
        {languages.map(({ id, link }) => {
          return (
            <ImageMain variants={child} transition={{ duration: 0.1 }} key={id}>
              <Image src={link} width={80} height={80} alt="language" />
            </ImageMain>
          );
        })}
      </ImageCard>
    </>
  );
};

export default TechStack;
