import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    max-height: 200vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    margin: 0 2% 0 2%;
    padding: 1%;
    border-radius: 4px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;;
    @media screen and (max-width: 768px){
        flex-direction:column ;
    }
`