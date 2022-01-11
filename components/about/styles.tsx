import styled from "styled-components";

export const SectionWrapper = styled.div`
  background: ${({ theme }) => theme.codeBlock};
  padding-block: 50px;
  margin-block: 100px;
  width: 100%;
  transform: skewY(-4deg);
  box-shadow: 2px 2px 8px -2px rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: 2px 2px 8px -2px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 2px 2px 8px -2px rgba(0, 0, 0, 0.4);
`;

export const Section = styled.div`
  transform: skewY(4deg);
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  align-items: center;
  gap: 10%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImgContainer = styled.div`
  width: 900px;
  border-radius: 50%;
  img {
    border-radius: 50%;

    @media (max-width: 768px) {
      width: 300px;
    }
  }
  @media (max-width: 768px) {
    width: 400px;
  }
`;

export const InlineLink = styled.a`
  text-decoration: none;
  padding-inline: 8px;
  color: ${({ theme }) => theme.accent};
`;
