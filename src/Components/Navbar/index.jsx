import React, { useState, useEffect } from "react";
import Logo from "../../Images/LogoIcon.png";
import { animateScroll as scroll } from "react-scroll";
import "./nav.css";
import Hamburguer from "../Hamburguer";
import {
  Nav,
  NavLogo,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink
} from "./styled.js";

const Navbar = () => {

  const[navChange, setnavChange] = useState(false);
  const navScroll = () => {
    if(window.scrollY >= 85){
      setnavChange(true);
    } else {
      setnavChange(false);
    }
  } 
  window.addEventListener('scroll', navScroll);
  return (
    <>
      <Nav>
        <NavLogo onClick={scroll.scrollToTop} to="/">
          <img
            className="Logo"
            src={Logo}
            alt="Home"
          />Goose
        </NavLogo>
        <Hamburguer></Hamburguer>
        <NavMenu>
          <NavLink to="/events">
            Eventos
          </NavLink>
          
          <NavLink to='/newEvent'>
            Anunciar evento
          </NavLink>
          <NavLink to='./newTicket'>
            Cadastrar ingresso
          </NavLink>
          <NavLink to="/sellers" >
            Revendas
          </NavLink>
          <NavLink to="/beaPromoter" >
            Seja um promotor
          </NavLink>
          <NavLink to='/signIN'>
            Entrar
          </NavLink>
          <NavBtn>
            <NavBtnLink to="/signUP">Registrar</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
