import styled from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Button = styled.button`
  width: 50px;
  height: 30px;
  border-radius: 5px;
  align-items: center;
  cursor: pointer;
  outline: 0;
  border: 0;
  transition: 0.4s linear;
  background: ${({ theme }) => theme.toggler};
`;

export const HeaderLink = styled.a`
  text-decoration: none;
  font-weight: bold;
  font-size: 1.25rem;
  cursor: pointer;
  span {
    padding: 0.1rem;
    transition: 0.4s linear;
  }
  span:nth-child(1) {
    color: ${({ theme }) => theme.text};
  }
  span:nth-child(2) {
    color: ${({ theme }) => theme.accent};
  }
`;

export const Section = styled.section`
  padding-block: 20px;
`;
