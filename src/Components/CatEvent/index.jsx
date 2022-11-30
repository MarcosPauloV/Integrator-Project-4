import React from "react";
import { FTitle, STitle } from "../PromoterContent/styled";
import { Container, ContTitle, ImgDiv, Img, ImgTitle } from "./styled";

import bar1 from "../../Images/Bar1.png";
import bar2 from "../../Images/Bar2.png";
import bar3 from "../../Images/Bar3.png";
import bar4 from "../../Images/Bar4.png";
import bar7 from "../../Images/bar7.jpg";
export default function Events() {
  return (
    <Container>
      <ContTitle>Descubra todas as nossas categorias</ContTitle>
      <ImgDiv to='/events'>
        <ImgTitle>Festa</ImgTitle>
        <Img src={bar1}></Img>
      </ImgDiv>
      <ImgDiv to='/events'>
        <ImgTitle>Humor</ImgTitle>
        <Img src={bar2}></Img>
      </ImgDiv>
      <ImgDiv to='/events'>
        <ImgTitle>Teatro</ImgTitle>
        <Img src={bar3}></Img>
      </ImgDiv>
      <ImgDiv to='/events'>
        <ImgTitle>Esporte</ImgTitle>
        <Img src={bar4}></Img>
      </ImgDiv>
      <ImgDiv to='/events'>
        <ImgTitle>Geek</ImgTitle>
        <Img src={bar7}></Img>
      </ImgDiv>
      
    </Container>
  );
}
