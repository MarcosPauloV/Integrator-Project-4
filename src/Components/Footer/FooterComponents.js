import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContent = styled.footer`
  margin-top: 30px;
  background-color: #161313;
  @media screen and (max-width: 768px) {
      margin-top: 60px;
  } 
`;

export const FooterTable = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
`;

export const FooterLinksContent = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksTable = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinksItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  margin: 16px;
  box-sizing: border-box;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinksTitle = styled.h1`
  color: #fff;
  font-size: 24px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  margin: 0.5rem;
  &:hover {
    color: #15cdfc;
    transition: all 200ms;
  }
`;

export const FooterLinksCopyright = styled.p`
  margin: 0;
  text-align: center;
  display: flex;
  justify-content: center;
  color: rgba(214, 212, 212, 0.637);
  font-size: 14px;
`;
