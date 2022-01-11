import { HiOutlineExternalLink } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import { projects } from "../../constants";
import {
  FlexBox,
  GridBox,
  IconLinks,
  ImageCard,
  ProjectDetails,
} from "./styles";
import ContentHeader from "../ContentHeader.component";
import Image from "next/image";

const Projects = () => {
  return (
    <>
      <ContentHeader>Some Things That I&apos;ve Built</ContentHeader>
      <GridBox>
        {projects.map(({ id, title, imgLink, github, link }) => (
          <ImageCard key={id}>
            <ProjectDetails>
              <FlexBox>
                <div>
                  <span>{title}</span>
                </div>
                <div>
                  <IconLinks href={github} target="_blank">
                    <BsGithub />
                  </IconLinks>
                  <IconLinks href={link} target="_blank">
                    <HiOutlineExternalLink />
                  </IconLinks>
                </div>
              </FlexBox>
            </ProjectDetails>
            <Image
              src={imgLink}
              layout="fill"
              objectFit="cover"
              alt="Project"
            />
          </ImageCard>
        ))}
      </GridBox>
    </>
  );
};

export default Projects;
