import { Link } from "react-router-dom";
import styled from "styled-components";

export const OptDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height:fit-content;
    flex-direction: column;
    @media screen and (max-width:768px) {
        flex-direction : column ;
        width: 100%;
    }
`
export const OptTitle = styled.h2`
    font-weight: bold;
    text-align: center;
    display: flex;
    color: #fff;
`

export const OptInfo = styled.div`
    width: 100%;
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: black;
    flex-direction: column;
`

export const BtnDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    margin-top: 5%;
`

export const LinkBtn = styled(Link)`
    width: 25%;
    margin: 2rem;
    padding: 1rem;
    font-weight: bold;
    color: #fff;
    background-color: #15cdfc;
    border: 1px solid #15cdfc;
    border-radius: 4px;
    text-align: center;
    border: none;
    font-size: 18px;
    text-decoration: none;
    &:hover{
        background-color: #09beeb;
        color: #000;
        transition: 200ms all ease-in-out;
        cursor: pointer;
    }
`

export const TickForm = styled.form`
    width: 50%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
`

export const LinkForm = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const LinkTo = styled.input`
    width: 100%;
    border: none;
    background-color: #f5f5f5;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border: 0.1rem solid #15cdfc;
    padding: 0.7rem;
    &:focus{
        outline: none;
        border-bottom: 0.2rem solid #15cdfc;;
    }
`

export const SubmitLink = styled.button`
    width: 25%;
    padding: 0.7rem;
    background-color: #15cdfc;
    border: none;
    border-radius: 4px;
    margin: 5%;
    color: #fff;
    font-weight: bold;
    
    &:hover{
        background-color: #09beeb;
        color: #fff;
        transition: 200ms all ease-in-out;
        cursor: pointer;
    }
`

export const Warning = styled.div`
    color: #e01d41;
    font-weight: bold;
    font-size: 16px;
    position: absolute;
    align-self: flex-start;
    @media screen and (max-width:768px) {
        
    }
`

