import Image from "next/image";
import { languages, frameworks } from "../../constants";
import ContentHeader from "../ContentHeader.component";
import { ImageCard, ImageMain } from "./styles";

const TechStack = () => {
  return (
    <>
      <ContentHeader>what I use everyday</ContentHeader>
      <h3>languages</h3>
      <ImageCard>
        {languages.map(({ id, link }) => {
          return (
            <ImageMain key={id}>
              <Image src={link} width={80} height={80} />
            </ImageMain>
          );
        })}
      </ImageCard>
      <br />
      <h3>frameworks, database and other tools</h3>
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
