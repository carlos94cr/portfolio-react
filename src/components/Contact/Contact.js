import React from "react";
import SocialIcon from "../SocialIcon/SocialIcon";
import { ContactWrapper, Email } from "./ContactElements";
function Contact() {
  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Contacto</div>
        <div className="BigCard">
          <Email>
            <span>En desarrollo...</span>
            <a
              className="btn PrimaryBtn"
              href="mailto:carlos94cr@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enviar
            </a>
          </Email>
        </div>
        <SocialIcon />
      </div>
    </ContactWrapper>
  );
}

export default Contact;
