import { Link } from "react-router-dom";
import styled from "styled-components";

export const TicketContainer = styled.div`
    width: 100%;
    height: 200vh;
    display: flex;
    position: relative;
    flex-direction: column;
`

export const TickContent = styled.div`
    width: 100%;
    height: 100%;
`

export const TickIMG = styled.div`
    height: 40%;
    width: 100%;
    display: flex;
   padding: 1rem;
`

export const IMG = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const TickInfo = styled.div`
    display: flex;
    height: 15%;
    width: 100%;
    flex-direction: column;
`
export const BuyBtn = styled(Link)`
    display: none;
`

export const TickDetContent = styled.div`
    display: flex;
    flex-direction: row;
`

export const TickDetails = styled.ul`
    list-style: none;
    width: 50%;
    padding: 1rem;
    margin-bottom: 0px;
`
export const Detail = styled.li`
    font-weight: bold;
    font-size: 17px;
    padding: 1rem;
    border-bottom: 1px solid #DBDADA;
`

export const Det = styled.span`
    color: #15cdfc;
`

export const TickSection = styled.div`
    display: flex;
    width: 100%;
    border: 1px solid green;
    flex-direction: row;
    height: 50%
`

export const Ticket = styled.div`
    padding: 1rem;
    width: 100%;
`
