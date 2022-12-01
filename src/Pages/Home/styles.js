import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  min-height: 400vh;
`;

export const A = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  h1 {
    color: white;
  }
`;

export const Content = styled.div`
    position: absolute;
    font-size: 32px;
    align-self: center;
    width: 50%;
    font-weight: bold;
    @media screen and (max-width: 768px) {
        align-items: flex-end;
        width: 70%;
        font-size: 16px;
    }
`

export const BtnLinkDiv = styled.div`
    display: flex;
    position: absolute;
    align-self: flex-end;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    margin-bottom: -5%;

`
export const BtnLink = styled(Link)`
  width: 25%;
    margin: 2rem;
    padding: 0.5rem;
    font-weight: bold;
    color: #fff;
    background-color: #15cdfc;
    border: 1px solid #15cdfc;
    border-radius: 4px;
    text-align: center;
    border: none;
    font-size: 18px;
    text-decoration: none;
    &:hover{
        background-color: #09beeb;
        color: #000;
        transition: 200ms all ease-in-out;
        cursor: pointer;
    }
    @media screen and (max-width: 768px) {
      width: 50%;
      font-size: 14px;
    }
`