import React from "react";
import styled from "styled-components";

const FooterSection = styled.div`
  background: rgba(0, 0, 0, 0.6);
  /*background-image: url(../.././images/footer_wave.svg);*/
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100px;
  position: relative;

  span {
    position: absolute;
    align-items: center;
    justify-content: center;
    bottom: 2rem;
    color: #fff;

    a {
      text-decoration: underline;
    }
  }
`;
function Footer() {
  return (
    <FooterSection>
      <div className="Container">
        <span>
          Creado por {" "}
          <a
            href="https://github.com/carlos94cr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @carlos94cr
          </a>{" "}
        </span>
      </div>
    </FooterSection>
  );
}

export default Footer;
