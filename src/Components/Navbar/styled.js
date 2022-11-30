import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: black;
  display: flex;
  justify-content: space-between;
  padding: 0 calc((5vw - 100px) / 2);
  z-index: 10;
  position: sticky;
  top: 0;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

export const NavLogo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 24px;
  
  &:hover{ 
    color: #15cdfc;
  }
`

export const Hamburguer = styled(FaBars)`
  display: none;
  color: white;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
/*
export const NavSearch = styled.input`
  background-color: whitesmoke;
  border: none;
  outline: none;
  padding: 0.4rem;
  width: 35%;
  border-radius: 5px;
`;
*/
export const NavLink = styled(Link)`
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;

  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
  &:hover {
    color: #15cdfc;
    transition: all 200ms;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  padding: 1.3rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  @media screen and (max-width: 768px) {
    display: none;
  }

 
  
`;

export const NavBtnLink = styled(Link)`
  
  border-radius: 4px;
  font-weight: bold;
  background: #15cdfc;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    background-color: #09beeb;
    color: #fff;
    transition: 200ms all ease-in-out;
    cursor: pointer;
  }
`;
