import styled from "styled-components";

export const FormS = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translate(-50%,-50%);
    width: 25%;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 4px;
    border: none;
    color: #000;
    font-weight: bold;
    font-size: 18px;
    @media screen and (max-width: 768px) {
        width: 80%;
        min-height: 40vh;
    }

`

export const ValidationCode = styled.div`
    width: 100%;
    padding: 1rem;
`

export const Code = styled.input`
    border-bottom: 1px solid black;
    padding: 0.5rem;
    border: none;
`

export const SubTitle = styled.p`
    color: #000;
    font-size: 14px;
`
