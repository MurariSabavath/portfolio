import styled from "styled-components";

export const GridBox = styled.div`
  margin-top: 20px;
  margin-bottom: 50px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-inline: 10px;
`;

export const Img = styled.img`
  border-radius: 10px;
  width: 100%;
  max-height: 350px;
  object-fit: cover;
`;

export const ImageCard = styled.div`
  transition: 0.4s linear;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  box-shadow: 2px 2px 8px -2px rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: 2px 2px 8px -2px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 2px 2px 8px -2px rgba(0, 0, 0, 0.4);

  &:hover {
    transform: scale(1.05);
  }

  &:hover div {
    height: 40px;
    padding-block: 5px;
  }
`;

export const ProjectDetails = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.secondary};
  color: white;
  bottom: 0;
  width: 100%;
  border-radius: 10px;
  z-index: 1;
  height: 0px;
  overflow: hidden;
  transition: 0.2s linear;
`;

export const IconLinks = styled.a`
  display: inline-block;
  text-decoration: none;
  color: black;
  padding-inline: 5px;
  font-size: 1.3rem;

  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;
