import styled from "styled-components";

export const ContactWrapper = styled.div`
  margin-top: 5rem;
  color: #f6f6f6;
  opacity: 0.98;
`;

export const Image = styled.img`
  max-width: 50vh;
  max-height: 50vh;
  min-width: 25vh;
  min-height: 25vh;
  width: 50%;
  height: 50%;
  margin: 0 auto;
  margin-bottom: 1rem;
  border-radius: 50%;
  display: block;
  &:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
`;

export const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: -2rem;
`;

export const Tech = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100px;
  min-width: 100px;
  margin-bottom: 2rem;
  align-items: center;
  justify-content: space-evenly;
`;

export const TechImg = styled.img`
  height: 50px;
  width: 50px;
`;

export const TechName = styled.div`
  font-size: 14px;
  text-align: center;
`;
