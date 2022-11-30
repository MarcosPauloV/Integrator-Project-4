import styled from "styled-components";
import {AiOutlineSearch} from 'react-icons/ai'
import { Link } from "react-router-dom";

export const EventsTickets = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  width: 80%;
  scroll-behavior: smooth;
  overflow-y: scroll;
  @media screen and (max-width: 768px){
    width: 100%;
  }

`

export const SearchInput = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
`

export const TickContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 100%;
  width: 100%;
`

export const TicketsSearch = styled.input`
  border: 1px solid #DBDADA;
  padding: 0.5rem;
  width: 100%;
  &:focus{
    outline: none;
  }
`

export const SearchIcon = styled.button`
  background-color: #15cdfc;
  border: none;
  color: gray;
  height: 42px;
  width: 50px;

  &:hover{
    background-color: #000;
    transition: 0.2s ease-in-out;
  }
`

export const Icon = styled(AiOutlineSearch)`
  color: White;
  height: 25px;
  width: 25px;
`


export const TicketDiv = styled(Link)`
    width: 21vh;
    height: 20vh;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;;
    border-radius: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    margin: 1rem;
    text-decoration: none;
    &:hover{
        transform: scale(1.1);
        transition: 500ms all ease-in-out;
        box-shadow: rgba(125, 191, 218, 0.486) 0px 7px 29px 0px;
        cursor: pointer;
    }

    @media screen and (max-width:768px){
        flex-direction: column;
    }
`

export const TicketInfo = styled.div`
    display: flex;
    position: relative;
`

export const TicketImage = styled.img`
    width: 21vh;
    height: 20vh;
    border-radius: 25%;
    object-fit: cover;
    background-color: white;
    border: none;
`

export const TicketTitle = styled.h4`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-transform: capitalize;
    font-weight: 1000;
    font-size: 20px;
    top: 0;
    width: 100%;
    height: 100%;
    //max-width: 100%;
    text-align: center;
    text-shadow: 0px 0px 6px rgba(255,255,255,0.7);
    letter-spacing: 4px;
    
`
export const LoadingPage = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  position: relative;
  width: 80%;
  font-weight: bold;
  font-size: 16px;
`

export const Loader = styled.div`
  position: absolute;
  margin: auto;
  border: 20px solid #EAF0F6;
  border-radius: 50%;
  border-top: 20px solid #15cdfc;
  width: 200px;
  height: 200px;
  animation: spinner 2s linear infinite;
@keyframes spinner {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`