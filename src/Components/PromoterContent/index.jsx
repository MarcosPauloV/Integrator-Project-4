import React from 'react'
import {
    MainDiv,
    AccBtn,
    FirstDiv,
    SecondDiv,
    ThirdDiv,
    FTitle,
    STitle,
    Content,
    RefDiv
} from './styled'

import {
    ScrollContainer,
    ScrollPage,
    Animator,
    batch,
    Sticky,
    Fade,
    FadeIn,
    FadeOut,
    Move,
    MoveIn,
    MoveOut,
    Zoom,
    ZoomIn,
    ZoomOut,
    StickyIn,
} from "react-scroll-motion"

import { useRef } from 'react'

export const PromoContent = (props) => {
    
    const scrollRef = useRef(null);

    const scrollToEl = (e) => {
        window.scrollTo({
            top: e.current.offsetTop,
            behavior: 'smooth'
        })
    };

  return (
    <>
        <ScrollContainer key={0}>
            <ScrollPage key={1} page={0}>
                <Animator animation={batch(Fade(), MoveOut(0, -100))}>
                    <FirstDiv>
                        <FTitle>Promova o que quiser!</FTitle>
                        <Content>
                            Seja um promotor. Exponha aquilo que acontece de melhor na sua localidade. Atraia qualquer 
                            público e torne-se conhecido. Anuncie seus eventos, cadastre uma gama de ingressos, receba transações e muito mais!
                            
                        </Content>
                        <AccBtn onClick={() => {
                            scrollToEl(scrollRef)
                        }}>Começar agora!</AccBtn>
                    </FirstDiv>
                </Animator>
                </ScrollPage>
                <ScrollPage key={2} page={1}>
                    <Animator animation={batch(MoveOut(0, -100 ))}>
                        <SecondDiv>
                            <STitle>Ganhe maior visibilidade</STitle>
                            <Content>
                                Aumente o seu alcance, atinja outros estados e cidades. Nossa plataforma não possui restrições de localidade,
                                é totalmente possível que pessoas de qualquer lugar do país se interessem pelo seu evento.
                            </Content>
                        </SecondDiv>
                    </Animator>
                </ScrollPage>
                <ScrollPage key={3} page={2}>
                    <Animator animation={batch(FadeIn(),MoveIn(0, 100))}>
                        <ThirdDiv>
                            <FTitle>Tenha vantagens</FTitle>
                            <Content>
                                Criando a sua conta, você poderá receber transações reais com ela! Sim, é verdade. Cadastrando
                                o ingresso relacionado ao seu evento, eles poderão ser adquiridos utilizando boletos, cartão 
                                de crédito entre outros métodos de pagamento... Caso você já tenha sua plataforma responsável pelos pagamentos, inclua-a nos 
                                seus detalhes. Nós direcionaremos os interessados para ela!
                            </Content>
                        </ThirdDiv>
                    </Animator>
                </ScrollPage>
                <RefDiv ref={scrollRef}></RefDiv>
        </ScrollContainer>
    </>
  )
}
