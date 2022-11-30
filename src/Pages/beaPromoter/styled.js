import styled from "styled-components";

export const PromoterDiv = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    align-items: left;
    min-height: 80vh;
    width: 100%;
    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column; 
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
    }

`

export const DivL = styled.div`
    height: 100%;
    width: 50%;
    
`


export const PromoterFormL = styled.form`
    color: #000;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`

export const FormTitle = styled.h1`
    font-weight: bold;
    color: #000;
    display: flex;
    align-self: center;
    
    @media screen and (max-width: 768px){
        display:flex;
        position: relative;
        align-self: center;
        margin-left: 0;
        margin-top: 0;
    }
`

export const PromoLabel = styled.label`
    display: flex;
    font-weight: bold;
`

export const SubmitBtn = styled.input`
    
    border-radius: 4px;
    font-weight: bold;
    background: #15cdfc;
    padding: 10px 22px;
    margin-top: 10%;
    color: #fff;
    outline: none;
    border: none;
    width: 45%;
    cursor: pointer;
    &:hover {
    background-color: #09beeb;
    color: #fff;
    transition: 200ms all ease-in-out;
    cursor: pointer;
    }

    @media screen and (max-width: 768px){
        display:flex;
        width: 90%;
        text-align: center;
        align-items: center;
        justify-content: center;
    }
`

export const ErrMsg = styled.p`
    color: #e01d41;
    font-size: 16px;
    margin-bottom: 0;
    text-align: justify;
`