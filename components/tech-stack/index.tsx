import Image from "next/image";
import { languages, frameworks } from "../../constants";
import ContentHeader from "../ContentHeader.component";
import { ImageCard, ImageMain } from "./styles";

const TechStack = () => {
  return (
    <>
      <ContentHeader>what I use everyday</ContentHeader>
      <ImageCard>
        {languages.map(({ id, link }) => {
          return (
            <ImageMain key={id}>
              <Image src={link} width={80} height={80} />
            </ImageMain>
          );
        })}
      </ImageCard>
      <ContentHeader>tools</ContentHeader>
      <ImageCard>
        {frameworks.map(({ id, link }) => {
          return (
            <ImageMain key={id}>
              <Image src={link} width={80} height={80} />
            </ImageMain>
          );
        })}
      </ImageCard>
    </>
  );
};

export default TechStack;
