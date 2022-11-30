import styled from "styled-components";

export const EvForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media screen and (max-width: 768px) {
        flex-direction : column;
        width: 100%;
        height: 200vh;
    }

`

export const InInfo = styled.h5`
    color: gray;
    letter-spacing: 0.1rem;
`

export const PreviewDiv = styled.div`
    width: 50%;
    height: 30vh;
    border-radius: 4px;
    margin-bottom: 5%;
    border: 2px solid #15cdfc;

    @media screen and (max-width:768px) {
        width: 90%;
    }

`

export const PreviewImg = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    border: none;
    &:hover{
        transition: 0.5s ease-in-out;
        cursor: pointer;
    }
`

export const LEv = styled.form`
    width: 50%;
    height: 100%;
    
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        
  
`

export const RTicket = styled.div`
    width: 50%;
    height: 100%;
    align-self: baseline;

    @media screen and (max-width: 768px){
        align-self: center ;
    }

`

export const FileInput = styled.input`
    display: none;
`

export const FileLabel = styled.label`
    width: 50%;
    padding: 1rem;
    font-weight: bold;
    color: #000;
    border: 1px solid #15cdfc;
    border-radius: 4px;
    text-align: center;
    background-color: #15cdfc;

    &:hover{
        background-color: #09beeb;
        transition: 200ms all ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width:768px) {
        width: 90% ;
    }

`

export const StySelect = styled.select`
    display: inline-block;
    width: 90%;
    height: 40px;
    //max-width: 200x;
    max-height: 40px;
    margin: 0.5rem 0;
    background-color: #f5f5f5;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border: 0.1rem solid #15cdfc;
    padding: 0 1rem;
    &:focus{
        outline: none;
        border-bottom: 0.2rem solid #15cdfc;;
    }
`

export const StyOpt = styled.option`
    background-color: transparent;
    outline: none;
    border: none;
    text-align: center;
    opacity: 100%;
`

export const StyText = styled.textarea`
    height: 200px;
    width: 90%;
    border: 1px solid #15cdfc;
    resize: none;
    overflow: auto;
    &:focus{
        outline: none;
    }
`
