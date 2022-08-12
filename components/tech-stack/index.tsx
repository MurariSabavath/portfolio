import Image from "next/image";
import { languages, frameworks } from "../../constants";
import ContentHeader from "../ContentHeader.component";
import { ImageCard, ImageMain } from "./styles";

const TechStack = () => {
  return (
    <>
      <ContentHeader>Tech stack</ContentHeader>
      <ImageCard>
        {languages.map(({ id, link }) => {
          return (
            <ImageMain key={id}>
              <Image src={link} width={80} height={80} alt="language" />
            </ImageMain>
          );
        })}
      </ImageCard>
    </>
  );
};

export default TechStack;
