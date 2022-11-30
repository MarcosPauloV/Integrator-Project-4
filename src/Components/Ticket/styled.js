import styled from "styled-components";
import { Link } from "react-router-dom";

export const TicketDiv = styled(Link)`
    width: 12vw;
    height: 20vh;
    background-color: yellow;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    margin: 1rem;

    &:hover{
        transform: scale(1.1);
        transition: 500ms all ease-in-out;
        box-shadow: rgba(125, 191, 218, 0.486) 0px 7px 29px 0px;;
    }

    @media screen and (max-width:768px){
        flex-direction: column;
    }
`
export const TicketImage = styled.img`
    display: inline;
    width: 12vw;
    height: 15vh;
    padding: 0.5rem;
    background-color: white;
    position: absolute;
    align-self: start;
    border-radius: 4px 4px;
`

export const TicketTitle = styled.h6`
    display: inline-block;
    color: #000;
    font-weight: bold;
`



export const TicketInfo = styled.div`
    position: absolute;
    align-self: flex-end;
`

export const Description = styled.p`
    color: #15cdfc;
`
