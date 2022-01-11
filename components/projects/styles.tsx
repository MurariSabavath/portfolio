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

export const ImageCard = styled.div`
  height: 400px;
  transition: 0.4s linear;
  cursor: pointer;
  position: relative;
  box-shadow: 2px 2px 8px -2px rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: 2px 2px 8px -2px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 2px 2px 8px -2px rgba(0, 0, 0, 0.4);

  &:hover {
    border-radius: 10px;
  }

  &:hover img {
    border-radius: 10px;
    transform: scale(1.05);
  }

  &:hover div {
    height: auto;
    padding-block: 5px;
  }
`;

export const ProjectDetails = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.secondary};
  color: white;
  border-radius: 8px;
  bottom: 0;
  width: 100%;
  z-index: 1;
  height: 0;
  overflow: hidden;
  transition: 0.2s linear;
`;

export const IconLinks = styled.a`
  display: inline-block;
  text-decoration: none;
  color: white;
  padding-inline: 5px;
  font-size: 1.3rem;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  span {
    border-radius: 10px;
  }
  img {
    transition: 0.4s;
    top: 0;
    left: 0;
    position: absolute;
    max-width: 400px;
  }
`;
