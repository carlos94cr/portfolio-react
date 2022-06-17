import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1>Hola,<br></br>soy Carlos de la Cruz</h1>
            <h5>Full-Stack Developer</h5>
            <h5>y Técnico de Audiovisuales.</h5>
            <p>
              Amante de la fotografía y los deportes de montaña.
            </p>
          </HeroLeft>
          <HeroRight>
            <Image
              src="./images/img-perfil.jpg"
              alt="img-perfil"
              class="imgPerfil"
            />
          </HeroRight>
        </HeroWrapper>
        <ScrollDown to="projects">
          <ScrollLink>
            Desliza
            <img
              src="./images/scroll-down.svg"
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
