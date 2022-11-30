import React from "react";
import { Container } from "./styled";
// import backimg from '../../Images/descimg.jpg'
import {FirstDiv ,Content, STitle, FTitle } from '../PromoterContent/styled'

export default function index() {
  return (
    <>
      <Container>
        <FTitle>Fique por dentro de tudo que acontece</FTitle>
        <Content>
          Nós garantimos uma oportunidade para você descobrir novos lugares e pessoas. Veja o que há
          de melhor bem perto de você. Conquiste memórias inesquecíveis, construa novos laços e vá atrás 
          da liberdade! 
        </Content>
      </Container>
    </>
  );
}
