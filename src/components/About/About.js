import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Technologies,
  Tech,
  Image,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";

function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">Sobre Mi</div>
        <div className="BigCard">
          <Image src="./images/img-bio.jpg" alt="img-bio" className="imgBio" />
          <div className="AboutBio">
            Hola! Me llamo <strong>Carlos de la Cruz</strong>, soy Full-Stack
            Developer y Técnico de Audiovisuales. Amante de la fotografía y los
            deportes de montaña.<br></br>
            Llevo trabajando con tecnologías y Audiovisuales más de 5 años.
            <br></br>
            <br></br>
            Me considero autodidacta, si me propongo aprender algo puedo estar
            horas y horas buscando información, con la facilidad que tenemos hoy
            en día de tener mucha información y puntos de vista en internet se
            convierte en una tarea divertida.
          </div>
          <div className="AboutBio tagline2">
            Utilizo las siguientes tecnologías.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
