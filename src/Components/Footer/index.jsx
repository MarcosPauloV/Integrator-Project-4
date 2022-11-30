import React from 'react'
import {
    FooterContent,
    FooterTable,
    FooterLinksContent,
    FooterLinksTable,
    FooterLinksItems,
    FooterLinksTitle,
    FooterLink,
    FooterLinksCopyright
} from './FooterComponents'


const Footer = () => {
  return (
    <FooterContent>
        <FooterTable>
            <FooterLinksContent>
                <FooterLinksTable>
                    <FooterLinksItems>
                        <FooterLinksTitle>Nossos serviços</FooterLinksTitle>
                        <FooterLink to='/events'>Eventos</FooterLink>
                        <FooterLink to='/sellers'>Revenda de ingressos</FooterLink>
                        <FooterLink to='/beapromoter'>Seja um promotor</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinksTitle>Contatos</FooterLinksTitle>
                        <FooterLink to='/events'>Eventos</FooterLink>
                        <FooterLink to='/sellers'>Revenda de ingressos</FooterLink>
                        <FooterLink to='/beapromoter'>Seja um promotor</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinksTitle>Sobre nós</FooterLinksTitle>
                        <FooterLink to='/events'>Eventos</FooterLink>
                        <FooterLink to='/sellers'>Revenda de ingressos</FooterLink>
                        <FooterLink to='/beapromoter'>Seja um promotor</FooterLink>
                    </FooterLinksItems>
                    
                </FooterLinksTable>
            </FooterLinksContent>
        </FooterTable>
        <FooterLinksCopyright>Copyright - 2022</FooterLinksCopyright>
    </FooterContent>
  )
}

export default Footer