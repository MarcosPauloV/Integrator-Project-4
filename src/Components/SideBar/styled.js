import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const SideBarMenu = styled.ul`
  list-style: none;
  display: flex;

  @media screen and (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: black;

    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    margin: 0;
    padding: 0;
    top: 0;
    right: 0;
    height: 100vh;
    width: 50vw;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    justify-content: center;
  }
`;

export const SideBarLink = styled(Link)`
  color: #fff;
  font-weight: bold;
  text-align: center;
  height: 100%;
  font-size: 22px;
  display: none;
  text-decoration: none;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
  }
  &:hover {
    color: #15cdfc;
    cursor: pointer;
    transition: 0.1s ease-in-out;
  }

  
`;
export const SideBarBtn = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    width: 100%;
  }
`;

export const SideBarBtnLink = styled(Link)`
  border-radius: 4px;
  font-weight: bold;
  text-align: center;
  width: 80%;
  font-size: 16px;
  background: #15cdfc;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
export const SideBarIcon = styled.span`
  color: black;
  width: 16px;
  height: 16px;
`;
