import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <div className="Container">
      <Nav>
        <Logo to="/">
          <img
            src="./images/logo.png"
            alt="logo"
          />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects" smooth={true}>
            Trabajos
          </NavLink>
          <NavLink className="menu-item" to="about" smooth={true}>
            Sobre Mi
          </NavLink>
          <NavLink className="menu-item" to="contact" smooth={true}>
            Contacto
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a
            className="btn PrimaryBtn"
            href="https://www.drcsonido.es"
            target="_blank"
            rel="noopener noreferrer"
          >
            Web de Empresa
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
