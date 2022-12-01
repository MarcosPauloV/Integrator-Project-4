import { Link } from "react-router-dom";
import styled from "styled-components";



export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #fff;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`
export const ContTitle = styled.h1`
  position: absolute;
  align-self: flex-start;
  text-align: center;
  font-weight: bold;
  @media screen {
    font-size : 16px ;
  }
`

export const ImgDiv = styled(Link)`
  height: 60vh;
  width: 30vh;
  margin: 10px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    height: 20vh;
    width: 25vh;
    margin: 5px;
  }
  &:hover{
    cursor: pointer;
    transform: scale(1.03);
    transition: 200ms all ease-in-out;
  }
`

export const ImgTitle = styled.h2`
  position: absolute;
  align-self: center;
  font-weight: bold;
  text-align: center;
  color: #fff;
  letter-spacing: 2px;
`

export const Img = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 4px;
  object-fit: cover;
  
`