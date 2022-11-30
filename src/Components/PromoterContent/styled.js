import styled from "styled-components";

export const MainDiv = styled.div`
    min-height: 180vh;
    width: 100%;
`
export const FirstDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 90vh;
    width: 100%;
    background-color: black;
    color: white;
    //background-image: url("https://i.pinimg.com/originals/d9/af/b2/d9afb2f0c922f34cb6ae8ad219f53ca3.gif");
    //background-repeat: no-repeat;
    //background-position: center;
    @media screen and (max-width: 768px){
        
    }
`

export const AccBtn = styled.button`
    width: 25%;
    padding: 1rem;
    font-weight: bold;
    color: #fff;
    background-color: #15cdfc;
    border: 1px solid #15cdfc;
    border-radius: 4px;
    text-align: center;
    border: none;
    position: absolute;
    align-self: flex-end;
    margin-bottom: 10%;
    font-size: 18px;

    @media screen and (max-width: 768px) {
        width: 50%;
        font-size: 16px;
        margin-bottom: 10%;
    }


    &:hover{
        background-color: #09beeb;
      color: #fff;
      transition: 200ms all ease-in-out;
      cursor: pointer;
    }
`

export const SecondDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 90vh;
    width: 100%;
    background-color: white;
    color: black;
    
    @media screen and (max-width: 768px){
        background-position-x: center;
        background-size: 300px;
    }

`


export const ThirdDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 90vh;
    width: 100%;
    background-color: black;
    color: white;
    background-image: url("https://i.pinimg.com/originals/94/82/5a/94825ad80fff30c13cccfaf3d2ce4ea8.gif");
    background-position: center;
    @media screen and (max-width:768px) {
        p{
            font-size: 16px;
        }
    }
`

export const FTitle = styled.h1`
    display: flex;
    position: absolute;
    align-self: flex-start;
    font-weight: bold;
    margin-top: 8%;
    @media screen and (max-width: 768px) {
        font-size: 20px;
       
    }
`

export const STitle = styled.h1`
    display: flex;
    position: absolute;
    align-self: baseline;
    font-weight: bold;
    margin-top: 8%;
    @media screen and (max-width: 768px) {
        font-size: 20px;
        
    }
    
`


export const Content = styled.p`
    font-weight: bold;
    font-size: 24px;
    display: flex;
    text-align: center;
    width: 70%;
    @media screen and (max-width: 768px) {
        font-size: 18px;
    }
`

export const RefDiv = styled.div`
    display: block;
`

/*
export const SignUpBtn = styled.button`
    position: absolute;
    text-align: center;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin-top: 10%;
    width: 20%;
    border-radius: 4px;
    font-weight: bold;
    background: #15cdfc;
    padding: 1rem;
    color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }

    @media screen and (max-width: 768px) {
        width: 50%;
        margin-top: 40%;
    }

`
*/
