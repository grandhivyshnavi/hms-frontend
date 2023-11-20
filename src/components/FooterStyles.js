import styled from "styled-components";

export const Box = styled.div`
  padding: 1% 2.5%;
  margin-top: 120px;
  background: grey;
  width: 95%;

  @media (max-width: 768px) {
    padding: 20px;
    margin-top: 80px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 20px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterLink = styled.a`
  color: black;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: white;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 20px;
  font-weight: bold;
`;
