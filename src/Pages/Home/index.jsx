import React, { useRef } from "react";
import { Carosel } from "../../Components/Carosel";
import CatEvent from "../../Components/CatEvent";
import Description from "../../Components/Description";
import { Parallax } from "react-parallax";
import none from "../../Images/backimg2.jpg";
import { Container, A, Content, BtnLinkDiv, BtnLink } from "./styles";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
import './home.css'
import { SecondDiv, STitle, ThirdDiv } from "../../Components/PromoterContent/styled";
import { BtnDiv } from "../newTicket/styled";
// v

export default function home() {
  return (
    <Container>
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Fade(), MoveOut(0, -10))}>
            <A>
              <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={none}
                bgImageAlt="background"
                strength={-100}
                className='bgImg'
              >
                
              </Parallax>
              <Content>
                Goose é um site que tem como principal pilar para seu desenvolvimento, a ligação entre as duas pontas
                de uma negociação de Tickets online. Aqui você pode cadastrar seus eventos para serem exibidos
                e também seus respectivos Tickets para serem adquiridos!
              </Content>
            </A>
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={batch(Fade(), MoveOut(0, -10))}>
            <CatEvent/>
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={batch(Fade(),MoveOut(0, -10))}>
            <Description />
          </Animator>
        </ScrollPage>
        <ScrollPage page={3}>
          <Animator animation={batch(Fade(), MoveOut(0, -10))}>
            <SecondDiv>
              <STitle>Crie agora sua conta</STitle>
              <Content>Você pode ser um promotor, tenha vantagens especiais, valide a sua conta e seja
                responsável por trazer o que há de melhor para dentro de nossa platforma. Você também pode ser 
                o festeiro, encontra aquiloq que mais te agrada e vá firme!
              </Content>
              <BtnLinkDiv>
                <BtnLink to='/beaPromoter'>Seja um Promotor</BtnLink>
                <BtnLink to='/signUP' >Crie sua conta</BtnLink>
              </BtnLinkDiv>
            </SecondDiv>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </Container>
  );
}
