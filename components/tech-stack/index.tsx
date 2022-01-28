import Image from "next/image";
import { languages, frameworks } from "../../constants";
import ContentHeader from "../ContentHeader.component";
import { ImageCard, ImageMain } from "./styles";

const TechStack = () => {
  return (
    <>
      <ContentHeader>Languages</ContentHeader>
      <ImageCard>
        {languages.map(({ id, link }) => {
          return (
            <ImageMain key={id}>
              <Image src={link} width={70} height={70} />
            </ImageMain>
          );
        })}
      </ImageCard>
      <ContentHeader>Frameworks and Libraries</ContentHeader>
      <ImageCard>
        {frameworks.map(({ id, link }) => {
          return (
            <ImageMain key={id}>
              <Image src={link} width={70} height={70} />
            </ImageMain>
          );
        })}
      </ImageCard>
    </>
  );
};

export default TechStack;
